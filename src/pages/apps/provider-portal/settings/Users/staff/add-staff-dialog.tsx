import { Box, Grid } from "@mui/material";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import {
  StaffFormLabels,
  StaffFormPlaceholders,
} from "../../../../../../constants/formConst";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { StaffSchema } from "./staff-schema";
import CustomContactInput from "../../../../../../common-components/custom-contact-input/custom-contact-field";

interface AddStaffDialogProps {
  handleClose: () => void;
}

const AddStaffDialog = ({ handleClose }: AddStaffDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
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

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const roleOptions = [
    { value: "admin", label: "Front Office Admin" },
    { value: "staff", label: "Nurse" },
    { value: "receptionist", label: "Record Custodian" },
  ];

  const onSubmit = () => {};

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

export default AddStaffDialog;
