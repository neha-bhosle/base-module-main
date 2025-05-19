import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../../../common-components/custom-contact-input/custom-contact-field";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import { AlertSeverity } from "../../../../../../common-components/snackbar-alert/snackbar-alert";
import {
  StaffFormLabels,
  StaffFormPlaceholders,
} from "../../../../../../constants/formConst";
import { AllTypes } from "../../../../../../models/all-const";
import { apiStatus } from "../../../../../../models/apiStatus";
import { PatientTypes } from "../../../../../../models/providerGroup";
import { loaderAction } from "../../../../../../redux/auth/loaderReducer";
import {
  addStaff,
  addStaffReducerAction,
} from "../../../../../../redux/auth/profile/add-staff-reducer";
import {
  editStaff,
  editStaffReducerAction,
} from "../../../../../../redux/auth/profile/edit-staff-reducer";
import { getAllStaff } from "../../../../../../redux/auth/profile/get-all-staff-reducer";
import { snackbarAction } from "../../../../../../redux/auth/snackbarReducer";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { StaffSchema } from "./staff-schema";

interface AddStaffDialogProps {
  handleClose: () => void;
  selectedStaff?: {
    name: string;
    email: string;
    contact: string;
    role: string;
    status: boolean;
    uuid: string;
    action: Array<{
      label: string;
      route: string;
    }>;
  };
  isEdit?: boolean;
}

interface StaffFormValues {
  firstName: string;
  lastName: string;
  emailId: string;
  contactNumber?: string;
  status?: string;
  role?: string;
}

const AddStaffDialog = ({
  handleClose,
  selectedStaff,
  isEdit,
}: AddStaffDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<StaffFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      contactNumber: "",
      status: "active",
      role: "",
    },
    resolver: yupResolver(StaffSchema),
  });

  const { status: addStaffStatus, error: addStaffError } = useSelector(
    (state: RootState) => state.AddStaffReducer
  );

  const { status: editStaffStatus, error: editStaffError } = useSelector(
    (state: RootState) => state.EditStaffReducer
  );

  const dispatch = useDispatch<AppDispatch>();

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const roleOptions = [
    { value: "Front Office Admin", label: "Front Office Admin" },
    { value: "Practice Owner", label: "Practice Owner" },
    { value: "Records Custodian", label: "Records Custodian" },
  ];

  const roleToEnumMap = {
    "Front Office Admin": "FRONT_OFFICE_ADMIN",
    "Practice Owner": "PRACTICE_OWNER",
    "Records Custodian": "RECORDS_CUSTODIAN",
  };

  useEffect(() => {
    if (selectedStaff) {
      const nameParts = selectedStaff.name.split(" ");
      setValue("firstName", nameParts[0] || "");
      setValue("lastName", nameParts.slice(1).join(" ") || "");
      setValue("emailId", selectedStaff.email || "");
      setValue("contactNumber", selectedStaff.contact || "");
      setValue("status", selectedStaff.status ? "active" : "inactive");
      setValue("role", selectedStaff.role || "");
    }
  }, [selectedStaff, setValue]);

  useEffect(() => {
    switch (addStaffStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Staff added successfully",
          })
        );
        dispatch(
          getAllStaff({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          })
        );
        dispatch(addStaffReducerAction.resetAddStaffReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: addStaffError || "An error occurred",
          })
        );
        break;
    }
  }, [addStaffStatus, dispatch, addStaffError, handleClose]);

  useEffect(() => {
    switch (editStaffStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Staff updated successfully",
          })
        );
        dispatch(
          getAllStaff({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          })
        );
        dispatch(editStaffReducerAction.resetEditStaffReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: editStaffError || "An error occurred",
          })
        );
        break;
    }
  }, [editStaffStatus, dispatch, editStaffError, handleClose]);

  const onSubmit = (values: StaffFormValues) => {
    const payload = {
      uuid: selectedStaff?.uuid,
      firstName: values.firstName,
      lastName: values.lastName,
      emailId: values.emailId,
      contactNumber: values.contactNumber,
      status: values.status === "active",
      role: values.role
        ? roleToEnumMap[values.role as keyof typeof roleToEnumMap]
        : undefined,
      xTenant: "default",
    };

    if (isEdit) {
      dispatch(editStaff(payload as unknown as PatientTypes));
    } else {
      dispatch(addStaff(payload as unknown as AllTypes));
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.FIRST_NAME} isRequired={true} />
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <CustomInput
                  placeholder={StaffFormPlaceholders.ENTER_FIRST_NAME}
                  {...field}
                  value={field.value || ""}
                  hasError={!!errors.firstName}
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.LAST_NAME} isRequired={true} />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <CustomInput
                  placeholder={StaffFormPlaceholders.ENTER_LAST_NAME}
                  {...field}
                  value={field.value || ""}
                  hasError={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.EMAIL_ID} isRequired={true} />
            <Controller
              control={control}
              name="emailId"
              render={({ field }) => (
                <CustomInput
                  placeholder={StaffFormPlaceholders.ENTER_EMAIL_ID}
                  {...field}
                  value={field.value || ""}
                  hasError={!!errors.emailId}
                  errorMessage={errors.emailId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.CONTACT_NUMBER} />
            <Controller
              control={control}
              name="contactNumber"
              render={({ field }) => (
                <CustomContactInput
                  {...field}
                  value={field.value || ""}
                  hasError={!!errors.contactNumber}
                  errorMessage={errors.contactNumber?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.STATUS} />
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <CustomSelect
                  placeholder={StaffFormPlaceholders.SELECT_STATUS}
                  {...field}
                  value={field.value || ""}
                  items={statusOptions}
                  hasError={!!errors.status}
                  errorMessage={errors.status?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={StaffFormLabels.ROLE} />
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <CustomSelect
                  placeholder={StaffFormPlaceholders.SELECT_ROLE}
                  {...field}
                  value={field.value || ""}
                  items={roleOptions}
                  hasError={!!errors.role}
                  errorMessage={errors.role?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid
          flexDirection={"row"}
          justifyContent={"flex-end"}
          mt={2}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "100%",
            borderTop: "1px solid #E7E7E7",
            paddingTop: 2,
          }}
        >
          <Grid
            display="flex"
            flexDirection={"row"}
            gap={3}
            sx={{ marginBottom: "1.5vh", marginRight: "1.5vw" }}
          >
            <Grid>
              <CustomButton
                variant="outline"
                label={StaffFormLabels.CANCEL}
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label={StaffFormLabels.SAVE}
                type="submit"
                changePadding={false}
                isSubmitButton
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddStaffDialog;
