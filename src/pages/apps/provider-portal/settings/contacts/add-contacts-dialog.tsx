import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import {
  ContactFormLabels,
  ContactFormPlaceholders,
} from "../../../../../constants/formConst";

const AddContactsDialog = () => {
  const [contactType, setContactType] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

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

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomLabel label={ContactFormLabels.CONTACT_TYPE} />
          <CustomSelect
            placeholder={ContactFormPlaceholders.SELECT_TYPE}
            name="contactType"
            value={contactType}
            items={contactTypeOptions}
            onChange={(e) => setContactType(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <CustomLabel label={ContactFormLabels.FULL_NAME} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_FULL_NAME}
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.CONTACT_NUMBER} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_CONTACT_NUMBER}
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.FAX_NUMBER} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_FAX_NUMBER}
            name="faxNumber"
            value={faxNumber}
            onChange={(e) => setFaxNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.EMAIL_ID} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_EMAIL_ID}
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={ContactFormLabels.ADDRESS} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_ADDRESS}
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.CITY} />
          <CustomSelect
            placeholder={ContactFormPlaceholders.SELECT_CITY}
            name="city"
            value={city}
            items={cityOptions}
            onChange={(e) => setCity(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.STATE} />
          <CustomSelect
            placeholder={ContactFormPlaceholders.SELECT_STATE}
            name="state"
            value={state}
            items={stateOptions}
            onChange={(e) => setState(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <CustomLabel label={ContactFormLabels.ZIP_CODE} />
          <CustomInput
            placeholder={ContactFormPlaceholders.ENTER_ZIP_CODE}
            name="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
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
              changePadding={false}
              // onClick={() => setAddLocationDialog(false)}
            />
          </Grid>
          <Grid>
            <CustomButton
              variant="filled"
              label="Save"
              changePadding={false}
              isSubmitButton

              // onClick={() => setAddLocationDialog(true)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddContactsDialog;
