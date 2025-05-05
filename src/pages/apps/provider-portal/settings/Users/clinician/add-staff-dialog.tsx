import { Box, Grid } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../../../common-components/customLabel/customLabel";
import CustomButton from "../../../../../../common-components/custom-button/custom-button";
import {
  StaffFormLabels,
  StaffFormPlaceholders,
} from "../../../../../../constants/formConst";

const AddStaffDialog = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [status, setStatus] = useState("active");
  const [role, setRole] = useState("");

  const statusOptions = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
  ];

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "staff", label: "Staff" },
    { value: "receptionist", label: "Receptionist" },
  ];

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.FIRST_NAME} isRequired={true} />
          <CustomInput
            placeholder={StaffFormPlaceholders.ENTER_FIRST_NAME}
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.LAST_NAME} isRequired={true} />
          <CustomInput
            placeholder={StaffFormPlaceholders.ENTER_LAST_NAME}
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.EMAIL_ID} isRequired={true} />
          <CustomInput
            placeholder={StaffFormPlaceholders.ENTER_EMAIL_ID}
            name="emailId"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.CONTACT_NUMBER} />
          <CustomInput
            placeholder={StaffFormPlaceholders.ENTER_CONTACT_NUMBER}
            name="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.STATUS} />
          <CustomSelect
            placeholder={StaffFormPlaceholders.SELECT_STATUS}
            name="status"
            value={status}
            items={statusOptions}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <CustomLabel label={StaffFormLabels.ROLE} />
          <CustomSelect
            placeholder={StaffFormPlaceholders.SELECT_ROLE}
            name="role"
            value={role}
            items={roleOptions}
            onChange={(e) => setRole(e.target.value)}
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

export default AddStaffDialog;
