import { Box, Grid } from "@mui/material";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
} from "../../../../../constants/formConst";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactsSchema } from "./contacts-schema";

const AddContactsDialog = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      contactType: "",
      fullName: "",
      contactNumber: "",
      faxNumber: "",
      emailId: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: yupResolver(ContactsSchema),
  });

  const contactTypeOptions = [
    { value: "emergency", label: "Emergency" },
    { value: "primary", label: "Primary" },
    { value: "secondary", label: "Secondary" },
    { value: "referral", label: "Referral" },
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
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CustomLabel label={ContactFormLabels.CONTACT_TYPE} isRequired />
            <Controller
              control={control}
              name="contactType"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ContactFormPlaceholders.SELECT_TYPE}
                  {...field}
                  value={field.value}
                  items={contactTypeOptions}
                  hasError={!!errors.contactType}
                  errorMessage={errors.contactType?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CustomLabel label={ContactFormLabels.FULL_NAME} isRequired />
            <Controller
              control={control}
              name="fullName"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_FULL_NAME}
                  {...field}
                  hasError={!!errors.fullName}
                  errorMessage={errors.fullName?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.CONTACT_NUMBER} isRequired />
            <Controller
              control={control}
              name="contactNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_CONTACT_NUMBER}
                  {...field}
                  hasError={!!errors.contactNumber}
                  errorMessage={errors.contactNumber?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.FAX_NUMBER} />
            <Controller
              control={control}
              name="faxNumber"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_FAX_NUMBER}
                  {...field}
                  hasError={!!errors.faxNumber}
                  errorMessage={errors.faxNumber?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.EMAIL_ID} isRequired />
            <Controller
              control={control}
              name="emailId"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_EMAIL_ID}
                  {...field}
                  hasError={!!errors.emailId}
                  errorMessage={errors.emailId?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <CustomLabel label={ContactFormLabels.ADDRESS} isRequired />
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_ADDRESS}
                  {...field}
                  hasError={!!errors.address}
                  errorMessage={errors.address?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.CITY} isRequired />
            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ContactFormPlaceholders.SELECT_CITY}
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
            <CustomLabel label={ContactFormLabels.STATE} isRequired />
            <Controller
              control={control}
              name="state"
              render={({ field }) => (
                <CustomSelect
                  placeholder={ContactFormPlaceholders.SELECT_STATE}
                  {...field}
                  value={field.value}
                  items={stateOptions}
                  hasError={!!errors.state}
                  errorMessage={errors.state?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <CustomLabel label={ContactFormLabels.ZIP_CODE} isRequired />
            <Controller
              control={control}
              name="zipCode"
              render={({ field }) => (
                <CustomInput
                  placeholder={ContactFormPlaceholders.ENTER_ZIP_CODE}
                  {...field}
                  hasError={!!errors.zipCode}
                  errorMessage={errors.zipCode?.message}
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
              <CustomButton variant="outline" label="Cancel" isSubmitButton />
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

export default AddContactsDialog;
