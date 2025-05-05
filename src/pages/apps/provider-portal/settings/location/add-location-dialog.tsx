import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import {
  LocationFormLabels,
  LocationFormPlaceholders,
} from "../../../../../constants/formConst";

const AddLocationDialog = () => {
  const [locationName, setLocationName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [groupNpiNumber, setGroupNpiNumber] = useState("");
  const [status, setStatus] = useState("");
  const [fax, setFax] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

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

  return (
    <Box>
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
              <CustomLabel label={LocationFormLabels.LOCATION_NAME} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_CLINIC_NAME}
                name="locationName"
                value={locationName}
                onChange={(e) => setLocationName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.CONTACT_NUMBER} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_CONTACT_NUMBER}
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.EMAIL_ID} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_EMAIL_ID}
                name="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.GROUP_NPI_NUMBER} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_GROUP_NPI_NUMBER}
                name="groupNpiNumber"
                value={groupNpiNumber}
                onChange={(e) => setGroupNpiNumber(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomLabel label={LocationFormLabels.STATUS} />
              <CustomSelect
                placeholder={LocationFormPlaceholders.SELECT_STATUS}
                name="status"
                value={status}
                items={statusOptions}
                onChange={(e) => setStatus(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomLabel label={LocationFormLabels.FAX} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_FAX}
                name="fax"
                value={fax}
                onChange={(e) => setFax(e.target.value)}
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
              <CustomLabel label={LocationFormLabels.ADDRESS_LINE_1} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_ADDRESS_LINE_1}
                name="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <CustomLabel label={LocationFormLabels.ADDRESS_LINE_2} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_ADDRESS_LINE_2}
                name="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.CITY} />
              <CustomSelect
                placeholder={LocationFormPlaceholders.SELECT_CITY}
                name="city"
                value={city}
                items={cityOptions}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.STATE} />
              <CustomSelect
                placeholder={LocationFormPlaceholders.SELECT_STATE}
                name="state"
                value={state}
                items={stateOptions}
                onChange={(e) => setState(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <CustomLabel label={LocationFormLabels.ZIP_CODE} />
              <CustomInput
                placeholder={LocationFormPlaceholders.ENTER_ZIP_CODE}
                name="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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

export default AddLocationDialog;
