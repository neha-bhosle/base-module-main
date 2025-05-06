import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import UploadImage from "../../../../../common-components/image-upload/image-upload";
import {
  SettingsFormLabels,
  SettingsFormMessages,
  SettingsFormPlaceholders,
} from "../../../../../constants/formConst";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileSchema } from "../profile/edit-profile-schema";

interface EditProfileDialogProps {
  handleClose: () => void;
}

const EditProfileDialog = ({ handleClose }: EditProfileDialogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      clinicNpiNumber: "",
      taxType: "",
      taxNumber: "",
      contactNumber: "",
      emailId: "",
      taxonomy: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    resolver: yupResolver(EditProfileSchema),
  });
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleSetImage = (image: string | ArrayBuffer | null) => {
    setProfileImage(image);
  };

  const onSubmit = () => {};

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1.5}>
          <Grid
            item
            xs={12}
            border="1px solid #E7E7E7"
            ml={1}
            p={1}
            borderRadius={2}
            mt={2}
          >
            <Grid mb={2}>
              {" "}
              <Typography variant="bodyMedium3">
                {SettingsFormLabels.PRACTICE_INFORMATION}
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <UploadImage
                    customStyle={{
                      width: "210px",
                      height: "210px",
                      marginBottom: "5px",
                    }}
                    imageUrl={profileImage as string}
                    handleSetImage={handleSetImage}
                    showRemove={true}
                  />
                  <Typography
                    variant="bodyRegular6"
                    sx={{ color: "#666", textAlign: "center" }}
                  >
                    {SettingsFormMessages.MAX_FILE_SIZE}
                  </Typography>
                  <Typography
                    variant="bodyRegular6"
                    sx={{ color: "#666", textAlign: "center" }}
                  >
                    {SettingsFormMessages.SUPPORTED_FILES}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={9}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <CustomLabel
                      label={SettingsFormLabels.CLINIC_NAME}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="username"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_CLINIC_NAME
                          }
                          {...field}
                          hasError={!!errors.username}
                          errorMessage={errors.username?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.CLINIC_NPI_NUMBER}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="clinicNpiNumber"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_CLINIC_NPI_NUMBER
                          }
                          {...field}
                          hasError={!!errors.clinicNpiNumber}
                          errorMessage={errors.clinicNpiNumber?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAX_TYPE} />
                    <Controller
                      control={control}
                      name="taxType"
                      render={({ field }) => (
                        <CustomSelect
                          placeholder={SettingsFormPlaceholders.SELECT_TAX_TYPE}
                          {...field}
                          value={field.value || ""}
                          items={[]}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAX_NUMBER} />
                    <Controller
                      control={control}
                      name="taxNumber"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_TAX_NUMBER
                          }
                          {...field}
                          hasError={!!errors.taxNumber}
                          errorMessage={errors.taxNumber?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.CONTACT_NUMBER}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="contactNumber"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={
                            SettingsFormPlaceholders.ENTER_CONTACT_NUMBER
                          }
                          {...field}
                          hasError={!!errors.contactNumber}
                          errorMessage={errors.contactNumber?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel
                      label={SettingsFormLabels.EMAIL_ID}
                      isRequired
                    />
                    <Controller
                      control={control}
                      name="emailId"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={SettingsFormPlaceholders.ENTER_EMAIL_ID}
                          {...field}
                          hasError={!!errors.emailId}
                          errorMessage={errors.emailId?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <CustomLabel label={SettingsFormLabels.TAXONOMY} />
                    <Controller
                      control={control}
                      name="taxonomy"
                      render={({ field }) => (
                        <CustomInput
                          placeholder={SettingsFormPlaceholders.ENTER_TAXONOMY}
                          {...field}
                          hasError={!!errors.taxonomy}
                          errorMessage={errors.taxonomy?.message}
                          isNumeric={false}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* </Paper> */}
          </Grid>
          <Grid
            item
            xs={12}
            border="1px solid #E7E7E7"
            ml={1}
            p={1}
            borderRadius={2}
            mt={2}
          >
            <Grid mb={2}>
              {" "}
              <Typography variant="bodyMedium3">
                {SettingsFormLabels.BILLING_ADDRESS}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <CustomLabel
                    label={SettingsFormLabels.ADDRESS_LINE_1}
                    isRequired
                  />
                  <Controller
                    control={control}
                    name="addressLine1"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={
                          SettingsFormPlaceholders.ENTER_ADDRESS_LINE_1
                        }
                        {...field}
                        hasError={!!errors.addressLine1}
                        errorMessage={errors.addressLine1?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <CustomLabel label={SettingsFormLabels.ADDRESS_LINE_2} />
                  <Controller
                    control={control}
                    name="addressLine2"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={
                          SettingsFormPlaceholders.ENTER_ADDRESS_LINE_2
                        }
                        {...field}
                        hasError={!!errors.addressLine2}
                        errorMessage={errors.addressLine2?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.CITY} isRequired />
                  <Controller
                    control={control}
                    name="city"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={SettingsFormPlaceholders.ENTER_CITY}
                        {...field}
                        hasError={!!errors.city}
                        errorMessage={errors.city?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.STATE} isRequired />
                  <Controller
                    control={control}
                    name="state"
                    render={({ field }) => (
                      <CustomSelect
                        placeholder={SettingsFormPlaceholders.SELECT_STATE}
                        {...field}
                        hasError={!!errors.state}
                        errorMessage={errors.state?.message}
                        value={field.value}
                        items={[]}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.ZIP_CODE} isRequired />
                  <Controller
                    control={control}
                    name="zipCode"
                    render={({ field }) => (
                      <CustomInput
                        placeholder={SettingsFormPlaceholders.ENTER_ZIP_CODE}
                        {...field}
                        hasError={!!errors.zipCode}
                        errorMessage={errors.zipCode?.message}
                        isNumeric={false}
                      />
                    )}
                  />
                </Grid>
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
                isSubmitButton
              />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EditProfileDialog;
