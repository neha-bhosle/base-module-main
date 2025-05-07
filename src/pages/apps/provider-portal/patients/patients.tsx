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
} from "../../../../constants/formConst";
import ImportPatientsDialog from "./import-patients-dialog";

const Patients = () => {
  const navigate = useNavigate();
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [tableData] = useState(
    PATIENT_MOCK_DATA.map((patient) => ({
      ...patient,
      action: [
        { label: "View", route: "view" },
        { label: "Edit", route: "edit" },
        { label: "Delete", route: "delete" },
      ],
    }))
  );

  const handleAddPatient = () => {
    navigate("/admin/add-patient");
  };

  const handleImportClick = () => {
    setImportDialogOpen(true);
  };

  return (
    <Grid container flexDirection="column" gap={2}>
      <Grid flexDirection="row" display="flex">
        <Grid display="flex" alignItems="center">
          <Typography variant="bodySemiBold2">Patients</Typography>
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
            <CustomInput showIcon={<SearchIcon />} bgWhite />
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
        />
      </Grid>

      <Dialog
        title="Import Patients"
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
