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

const EditProfileDialog = () => {
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleSetImage = (image: string | ArrayBuffer | null) => {
    setProfileImage(image);
  };

  return (
    <Box>
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
                  <CustomLabel label={SettingsFormLabels.CLINIC_NAME} />
                  <CustomInput
                    placeholder={SettingsFormPlaceholders.ENTER_CLINIC_NAME}
                    name="clinicName"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.CLINIC_NPI_NUMBER} />
                  <CustomInput
                    placeholder={
                      SettingsFormPlaceholders.ENTER_CLINIC_NPI_NUMBER
                    }
                    name="clinicNpiNumber"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.TAX_TYPE} />
                  <CustomSelect
                    placeholder={SettingsFormPlaceholders.SELECT_TAX_TYPE}
                    name="taxType"
                    value={""}
                    items={[]}
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.TAX_NUMBER} />
                  <CustomInput
                    placeholder={SettingsFormPlaceholders.ENTER_TAX_NUMBER}
                    name="taxNumber"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.CONTACT_NUMBER} />
                  <CustomInput
                    placeholder={SettingsFormPlaceholders.ENTER_CONTACT_NUMBER}
                    name="contactNumber"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.EMAIL_ID} />
                  <CustomInput
                    placeholder={SettingsFormPlaceholders.ENTER_EMAIL_ID}
                    name="emailId"
                  />
                </Grid>

                <Grid item xs={12} md={4}>
                  <CustomLabel label={SettingsFormLabels.TAXONOMY} />
                  <CustomInput
                    placeholder={SettingsFormPlaceholders.ENTER_TAXONOMY}
                    name="taxonomy"
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
                <CustomLabel label={SettingsFormLabels.ADDRESS_LINE_1} />
                <CustomInput
                  placeholder={SettingsFormPlaceholders.ENTER_ADDRESS_LINE_1}
                  name="addressLine1"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <CustomLabel label={SettingsFormLabels.ADDRESS_LINE_2} />
                <CustomInput
                  placeholder={SettingsFormPlaceholders.ENTER_ADDRESS_LINE_2}
                  name="addressLine2"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={SettingsFormLabels.CITY} />
                <CustomInput
                  placeholder={SettingsFormPlaceholders.ENTER_CITY}
                  name="city"
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={SettingsFormLabels.STATE} />
                <CustomSelect
                  placeholder={SettingsFormPlaceholders.SELECT_TAX_TYPE}
                  name="taxType"
                  value={""}
                  items={[]}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <CustomLabel label={SettingsFormLabels.ZIP_CODE} />
                <CustomInput
                  placeholder={SettingsFormPlaceholders.ENTER_ZIP_CODE}
                  name="zipCode"
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
              changePadding={false}
            />
          </Grid>
          <Grid>
            <CustomButton
              variant="filled"
              label="Save"
              changePadding={false}
              isSubmitButton
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProfileDialog;
