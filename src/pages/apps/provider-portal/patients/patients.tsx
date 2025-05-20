import AddIcon from "@mui/icons-material/Add";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Dialog, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import { patientTableHeaders } from "../../../../common-components/headers/all-headers";
import { PATIENT_MOCK_DATA } from "../../../../common-components/mock-data/all-mock-data";
import CustomisedTable from "../../../../common-components/table/table";
import {
  SettingsFormConstants,
  PatientTableLabels,
  PatientFormButtons,
  PatientTemplateActions,
} from "../../../../constants/formConst";
import ImportPatientsDialog from "./import-patients-dialog";

const Patients = () => {
  const navigate = useNavigate();
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [tableData] = useState(
    PATIENT_MOCK_DATA.map((patient) => ({
      ...patient,
      action: [
        { label: "Merge Duplicate Clients", route: "Merge Duplicate" },
       
      ],
    }))
  );

  const handleAddPatient = () => {
    navigate("/admin/patients/add-patient");
  };

  const handleImportClick = () => {
    setImportDialogOpen(true);
  };


  interface PatientData {
    clinician: string;
    contactNumber: string;
    dob: string;
    emailId: string;
    memberSince: string;
    mrn: string;
    patientName: string;
    paymentMethod: string;
    status: string;
  }

  const handleNavigate = (row: PatientData) => {

    console.log("row>", row);
    navigate(`/admin/patient-profile/${row.mrn}`,{state: row});
  };


  return (
    <Grid container flexDirection="column" gap={2}>
      <Grid flexDirection="row" display="flex">
        <Grid display="flex" alignItems="center">
          <Typography variant="bodySemiBold2">Clients</Typography>
        </Grid>
        <Grid
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          flex={1}
          gap={2}
        >
          <Grid width={"7vw"}>
            <CustomSelect
              placeholder={PatientTableLabels.NAME}
              value={""}
              items={[]}
              backgroundColor="#FFFFFF"
            />
          </Grid>
          <Grid>
            <CustomInput showIcon={<SearchIcon />} bgWhite placeholder="Search" />
          </Grid>
          <Grid
            flexDirection="row"
            display="flex"
            gap={1}
            bgcolor={"#FFFFFF"}
            p={0.9}
            pl={2.5}
            pr={2.5}
            borderRadius={1}
            border={"1px solid #E0E0E0"}
            alignItems="center"
            justifyContent="center"
            onClick={handleImportClick}
            sx={{ cursor: "pointer" }}
          >
            <Grid>
              <FileUploadOutlinedIcon />
            </Grid>
            <Grid>
              <Typography>{PatientFormButtons.IMPORT_CLIENTS}</Typography>
            </Grid>
          </Grid>
          <Grid>
            <CustomButton
              variant="filled"
              label={SettingsFormConstants.ADD_NEW_PATIENT}
              startIcon={<AddIcon />}
              changePadding={true}
              isSubmitButtonTwo
              onClick={handleAddPatient}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <CustomisedTable
          headCells={patientTableHeaders}
          tableData={tableData}
          showCPTAndICDPagination
          setHeight="75vh"
          removeRadius={false}
          handleNavigate={handleNavigate}
        />
      </Grid>

      <Dialog
        title={PatientTemplateActions.IMPORT_CLIENTS}
        open={importDialogOpen}
        onClose={() => setImportDialogOpen(false)}
      >
        <ImportPatientsDialog
          open={importDialogOpen}
          handleClose={() => setImportDialogOpen(false)}
        />
      </Dialog>
    </Grid>
  );
};

export default Patients;
