import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import CustomContactInput from "../../../../../../common-components/custom-contact-input/custom-contact-field";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomMultiSelect from "../../../../../../common-components/custom-multiselect/custom-multiselect";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import { AlertSeverity } from "../../../../../../common-components/snackbar-alert/snackbar-alert";
import {
  ClinicianFormLabels,
  ClinicianFormPlaceholders,
} from "../../../../../../constants/formConst";
import { apiStatus } from "../../../../../../models/apiStatus";
import { loaderAction } from "../../../../../../redux/auth/loaderReducer";
import {
  addClinician,
  addClinicianReducerAction,
} from "../../../../../../redux/auth/profile/add-clinician-reducer";
import {
  editClinician,
  editClinicianReducerAction,
} from "../../../../../../redux/auth/profile/edit-clinician-reducer";
import { getAllClinicians } from "../../../../../../redux/auth/profile/get-all-clinicians";
import { getAllSupervisingClinicians } from "../../../../../../redux/auth/profile/get-all-supervising-clinicians";
import { getAllWorkLocationClinician } from "../../../../../../redux/auth/profile/get-all-worklocation-clinicians";
import { getClinicianById } from "../../../../../../redux/auth/profile/get-clinician-by-id-reducer";
import { snackbarAction } from "../../../../../../redux/auth/snackbarReducer";
import { AppDispatch, RootState } from "../../../../../../redux/store";
import { ClinicianSchema } from "./clinician-schema";
import { PatientTypes } from "../../../../../../models/providerGroup";
import { AllTypes, ClinicianPayload } from "src/models/all-const";
interface AddClinicianDialogProps {
  handleClose: () => void;
  isEdit?: boolean;
  selectedClinician?: any;
}

interface ClinicianFormData {
  firstName: string;
  lastName: string;
  emailId: string;
  contactNumber: string;
  npiNumber: string;
  workLocations: string[];
  languagesSpoken: string[];
  supervisingClinician?: string;
  role: string;
}

// interface ClinicianPayload {
//   uuid?: string;
//   firstName: string;
//   lastName: string;
//   emailId: string;
//   contactNumber: string;
//   npiNumber: string;
//   locationUuids: string[];
//   languagesSpoken: string[];
//   supervisingClinician?: string;
//   role: string;
//   xTenant: string;
//   size: number;
//   page: number;
//   searchString: string;
//   email: string;
//   status: boolean;
//   supervisorClinicianName?: string;
//   supervisorClinicianId?: string;
// }

const AddClinicianDialog = ({
  handleClose,
  isEdit = false,
  selectedClinician,
}: AddClinicianDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<ClinicianFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      emailId: "",
      contactNumber: "",
      npiNumber: "",
      workLocations: [],
      languagesSpoken: [],
      supervisingClinician: "",
      role: "",
    },
    resolver: yupResolver<ClinicianFormData>(ClinicianSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const { status: addClinicianStatus, error: addClinicianError }: any =
    useSelector((state: RootState) => state.AddClinicianReducer);

  const { status: editClinicianStatus, error: editClinicianError }: any =
    useSelector((state: RootState) => state.EditClinicianReducer);

  const { data: getClinicianByIdData = {} }: any = useSelector(
    (state: RootState) => state.GetClinicianByIdReducer
  );

  const { data: getAllWorkLocationClinicianData = {} }: any =
    useSelector(
      (state: RootState) => state.GetAllWorkLocationClinicianReducer
    ) || {};

  const { data: getAllSupervisingCliniciansData }: any =
    useSelector(
      (state: RootState) => state.GetAllSupervisingCliniciansReducer
    ) || {};

  const displaySupervisingClinicians = Object.entries(
    getAllSupervisingCliniciansData || {}
  ).map(([uuid, value]) => ({
    value: uuid,
    label: String(value),
  }));

  const workLocationOptions = Object.entries(
    getAllWorkLocationClinicianData || {}
  ).map(([uuid, locationName]) => ({
    key: uuid,
    value: locationName as string,
  }));

  const roleOptions = [
    { value: "THERAPIST", label: "Therapist" },
    { value: "PSYCHIATRIST", label: "Psychotherapist" },
    { value: "SUPERVISOR", label: "Case Manager" },
    { value: "PRACTICE_OWNER", label: "Navigator" },
  ];

  const languageOptions = [
    { key: "English", value: "English" },
    { key: "Spanish", value: "Spanish" },
    { key: "Portuguese", value: "Portuguese" },
    { key: "French", value: "French" },
    { key: "Mandarin", value: "Mandarin" },
    { key: "Arabic", value: "Arabic" },
    { key: "Japanese", value: "Japanese" },
  ];

  const onSubmit = (data: ClinicianFormData) => {
    const payload: ClinicianPayload = {
      uuid: selectedClinician?.uuid,
      firstName: data?.firstName,
      lastName: data?.lastName,
      emailId: data?.emailId,
      contactNumber: data?.contactNumber,
      npiNumber: data?.npiNumber,
      locationUuids: data?.workLocations,
      languagesSpoken: data?.languagesSpoken,
      supervisorClinicianId: data?.supervisingClinician || null,
      role:
        data?.role === "THERAPIST"
          ? "THERAPIST"
          : data?.role === "PSYCHOLOGIST"
            ? "PSYCHIATRIST"
            : data?.role === "CASE_MANAGER"
              ? "SUPERVISOR"
              : data?.role === "NAVIGATOR"
                ? "PRACTICE_OWNER"
                : "THERAPIST",
      xTenant: "default",
      size: 10,
      page: 0,
      searchString: "",
      email: data?.emailId,
      status: true,
      archive: false,
      supervisorClinicianName: "",
      locationNames: [],
    };

    if (isEdit) {
      dispatch(editClinician(payload as unknown as PatientTypes));
    } else {
      dispatch(addClinician(payload as unknown as AllTypes));
    }
  };

  useEffect(() => {
    if (selectedClinician?.uuid) {
      dispatch(getClinicianById(selectedClinician?.uuid));
    }
  }, [selectedClinician, dispatch]);

  useEffect(() => {
    dispatch(getAllWorkLocationClinician());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSupervisingClinicians());
  }, [dispatch]);

  useEffect(() => {
    if (
      isEdit &&
      getClinicianByIdData &&
      Object.keys(getClinicianByIdData).length > 0
    ) {
      console.log(
        "Using getClinicianByIdData for form population",
        getClinicianByIdData
      );

      setValue("firstName", getClinicianByIdData.firstName || "");
      setValue("lastName", getClinicianByIdData.lastName || "");
      setValue("emailId", getClinicianByIdData.emailId || "");
      setValue("contactNumber", getClinicianByIdData.contactNumber || "");
      setValue("npiNumber", getClinicianByIdData.npiNumber || "");

      const locationUuids = getClinicianByIdData.locationUuids || [];
      setValue(
        "workLocations",
        Array.isArray(locationUuids) ? locationUuids : []
      );

      const languagesList = getClinicianByIdData.languagesSpoken || [];
      setValue(
        "languagesSpoken",
        Array.isArray(languagesList) ? languagesList : []
      );

      setValue(
        "supervisingClinician",
        getClinicianByIdData?.supervisorClinicianId || ""
      );

      // Map backend role values to form values
      let roleValue = "";
      switch (getClinicianByIdData?.role) {
        case "THERAPIST":
          roleValue = "THERAPIST";
          break;
        case "PSYCHIATRIST":
          roleValue = "PSYCHIATRIST";
          break;
        case "SUPERVISOR":
          roleValue = "SUPERVISOR";
          break;
        case "PRACTICE_OWNER":
          roleValue = "PRACTICE_OWNER";
          break;
        default:
          roleValue = getClinicianByIdData?.role || "";
      }
      setValue("role", roleValue);
    }
  }, [isEdit, getClinicianByIdData, setValue]);

  useEffect(() => {
    switch (addClinicianStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Clinician added successfully",
          })
        );
        dispatch(
          getAllClinicians({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as ClinicianPayload)
        );
        dispatch(addClinicianReducerAction.resetAddClinicianReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: addClinicianError,
          })
        );
        break;
    }
  }, [addClinicianStatus, dispatch, addClinicianError, handleClose]);

  useEffect(() => {
    switch (editClinicianStatus) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.SUCCESS,
            message: "Clinician updated successfully",
          })
        );
        dispatch(
          getAllClinicians({
            xTenant: "default",
            size: 10,
            page: 0,
            searchString: "",
          } as ClinicianPayload)
        );
        dispatch(editClinicianReducerAction.resetEditClinicianReducer());
        handleClose();
        break;
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: editClinicianError,
          })
        );
        break;
    }
  }, [editClinicianStatus, dispatch, editClinicianError, handleClose]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.FIRST_NAME}
              isRequired={true}
            />
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_FIRST_NAME}
                  {...field}
                  hasError={!!errors.firstName}
                  errorMessage={errors.firstName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.LAST_NAME}
              isRequired={true}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_LAST_NAME}
                  {...field}
                  hasError={!!errors.lastName}
                  errorMessage={errors.lastName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.ROLE} isRequired={true} />
            <Controller
              control={control}
              name="role"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_ROLE}
                  {...field}
                  value={field.value || ""}
                  items={roleOptions}
                  hasError={!!errors.role}
                  errorMessage={errors.role?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.EMAIL_ID}
              isRequired={true}
            />
            <Controller
              control={control}
              name="emailId"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_EMAIL_ID}
                  {...field}
                  hasError={!!errors.emailId}
                  errorMessage={errors.emailId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.CONTACT_NUMBER}
              isRequired={true}
            />
            <Controller
              control={control}
              name="contactNumber"
              render={({ field }) => (
                <CustomContactInput
                  {...field}
                  hasError={!!errors.contactNumber}
                  errorMessage={errors.contactNumber?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.NPI_NUMBER}
              isRequired={true}
            />
            <Controller
              control={control}
              name="npiNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ClinicianFormPlaceholders.ENTER_NPI_NUMBER}
                  {...field}
                  hasError={!!errors.npiNumber}
                  errorMessage={errors.npiNumber?.message}
                  isNumeric={true}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.WORK_LOCATIONS}
              isRequired={true}
            />
            <Controller
              control={control}
              name="workLocations"
              render={({ field }) => (
                <CustomMultiSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_WORK_LOCATIONS}
                  {...field}
                  value={Array.isArray(field.value) ? field.value : []}
                  options={workLocationOptions}
                  hasError={!!errors.workLocations}
                  errMsg={errors.workLocations?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel
              label={ClinicianFormLabels.LANGUAGES_SPOKEN}
              isRequired={true}
            />
            <Controller
              control={control}
              name="languagesSpoken"
              render={({ field }) => (
                <CustomMultiSelect
                  placeholder={ClinicianFormPlaceholders.SELECT_LANGUAGES}
                  {...field}
                  value={Array.isArray(field.value) ? field.value : []}
                  options={languageOptions}
                  hasError={!!errors.languagesSpoken}
                  errMsg={errors.languagesSpoken?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ClinicianFormLabels.SUPERVISING_CLINICIAN} />
            <Controller
              control={control}
              name="supervisingClinician"
              render={({ field }) => (
                <CustomSelect
                  placeholder={
                    ClinicianFormPlaceholders.SELECT_SUPERVISING_CLINICIAN
                  }
                  {...field}
                  value={field.value || ""}
                  items={displaySupervisingClinicians}
                  hasError={!!errors.supervisingClinician}
                  errorMessage={errors.supervisingClinician?.message}
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
                label="Cancel"
                isSubmitButton
                onClick={handleClose}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label="Save"
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

export default AddClinicianDialog;
