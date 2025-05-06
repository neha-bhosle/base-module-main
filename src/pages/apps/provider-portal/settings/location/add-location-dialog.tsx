import { Box, Grid, Typography } from "@mui/material";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import {
  LocationFormLabels,
  LocationFormPlaceholders,
} from "../../../../../constants/formConst";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocationSchema } from "./location-schema";

interface AddLocationDialogProps {
  handleClose: () => void;
}

const AddLocationDialog = ({ handleClose }: AddLocationDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      locationName: "",
      contactNumber: "",
      emailId: "",
      groupNpiNumber: "",
      status: "",
      fax: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: yupResolver(LocationSchema),
  });

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const cityOptions = [
    { value: "city1", label: "City 1" },
    { value: "city2", label: "City 2" },
  ];

  const stateOptions = [
    { value: "state1", label: "State 1" },
    { value: "state2", label: "State 2" },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1.5} padding={2}>
          <Grid
            item
            xs={12}
            border="1px solid #E7E7E7"
            p={2}
            borderRadius={2}
            mb={2}
          >
            <Grid mb={2}>
              <Typography variant="bodyMedium3">
                {LocationFormLabels.LOCATION_INFORMATION}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CustomLabel
                  label={LocationFormLabels.LOCATION_NAME}
                  isRequired
                />
                <Controller
                  control={control}
                  name="locationName"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_LOCATION_NAME}
                      {...field}
                      hasError={!!errors.locationName}
                      errorMessage={errors.locationName?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel
                  label={LocationFormLabels.CONTACT_NUMBER}
                  isRequired
                />
                <Controller
                  control={control}
                  name="contactNumber"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_CONTACT_NUMBER
                      }
                      {...field}
                      hasError={!!errors.contactNumber}
                      errorMessage={errors.contactNumber?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.EMAIL_ID} isRequired />
                <Controller
                  control={control}
                  name="emailId"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_EMAIL_ID}
                      {...field}
                      hasError={!!errors.emailId}
                      errorMessage={errors.emailId?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel
                  label={LocationFormLabels.GROUP_NPI_NUMBER}
                  isRequired
                />
                <Controller
                  control={control}
                  name="groupNpiNumber"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_GROUP_NPI_NUMBER
                      }
                      {...field}
                      hasError={!!errors.groupNpiNumber}
                      errorMessage={errors.groupNpiNumber?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.STATUS} />
                <Controller
                  control={control}
                  name="status"
                  render={({ field }) => (
                    <CustomSelect
                      placeholder={LocationFormPlaceholders.SELECT_STATUS}
                      {...field}
                      value={field.value || ""}
                      items={statusOptions}
                      hasError={!!errors.status}
                      errorMessage={errors.status?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.FAX} />
                <Controller
                  control={control}
                  name="fax"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_FAX}
                      {...field}
                      hasError={!!errors.fax}
                      errorMessage={errors.fax?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Physical Address Section */}
          <Grid item xs={12} border="1px solid #E7E7E7" p={2} borderRadius={2}>
            <Grid mb={2}>
              <Typography variant="bodyMedium3">
                {LocationFormLabels.PHYSICAL_ADDRESS}
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CustomLabel
                  label={LocationFormLabels.ADDRESS_LINE_1}
                  isRequired
                />
                <Controller
                  control={control}
                  name="addressLine1"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_ADDRESS_LINE_1
                      }
                      {...field}
                      hasError={!!errors.addressLine1}
                      errorMessage={errors.addressLine1?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomLabel label={LocationFormLabels.ADDRESS_LINE_2} />
                <Controller
                  control={control}
                  name="addressLine2"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={
                        LocationFormPlaceholders.ENTER_ADDRESS_LINE_2
                      }
                      {...field}
                      hasError={!!errors.addressLine2}
                      errorMessage={errors.addressLine2?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.CITY} isRequired />
                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => (
                    <CustomSelect
                      placeholder={LocationFormPlaceholders.SELECT_CITY}
                      {...field}
                      value={field.value}
                      items={cityOptions}
                      hasError={!!errors.city}
                      errorMessage={errors.city?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.STATE} isRequired />
                <Controller
                  control={control}
                  name="state"
                  render={({ field }) => (
                    <CustomSelect
                      placeholder={LocationFormPlaceholders.SELECT_STATE}
                      {...field}
                      value={field.value || ""}
                      items={stateOptions}
                      hasError={!!errors.state}
                      errorMessage={errors.state?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={LocationFormLabels.ZIP_CODE} isRequired />
                <Controller
                  control={control}
                  name="zipCode"
                  render={({ field }) => (
                    <CustomInput
                      placeholder={LocationFormPlaceholders.ENTER_ZIP_CODE}
                      {...field}
                      hasError={!!errors.zipCode}
                      errorMessage={errors.zipCode?.message}
                    />
                  )}
                />
              </Grid>
            </Grid>
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

export default AddLocationDialog;
