import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AlertSeverity } from "../../../../common-components/alert/alert";
import MultipleFilesUpload from "../../../../common-components/multiple-files-upload copy/multiple-files-upload";
import { snackbarAction } from "../../../../redux/auth/snackbarReducer";
import {
  PatientFormButtons,
  PatientTemplateActions,
} from "../../../../constants/formConst";

interface ImportPatientsDialogProps {
  open: boolean;
  handleClose: () => void;
}

const ImportPatientsDialog = ({
  open,
  handleClose,
}: ImportPatientsDialogProps) => {
  const dispatch = useDispatch();

  const handleDownloadTemplate = () => {
    handleClose()
    dispatch(
      snackbarAction.showSnackbarAction({
        severity: AlertSeverity.SUCCESS,
        message: PatientTemplateActions.TEMPLATE,
        messageTwo: PatientTemplateActions.TEMPLATE_SUCCESS_MESSAGE,
      })
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pb: 1,
          borderBottom: "1px solid #E0E0E0",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid item>
            <Typography variant="bodyMedium2">
              {PatientFormButtons.IMPORT_PATIENTS}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="bodyMedium4"
              color="primary"
              sx={{ cursor: "pointer", mr: 2, textDecoration: "underline" }}
              onClick={handleDownloadTemplate}
            >
              {PatientTemplateActions.DOWNLOAD_TEMPLATE}
            </Typography>
          </Grid>
        </Grid>
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box sx={{ p: 0.5 }} mt={2}>
        <Grid pl={2} pr={2} pb={2}>
          <MultipleFilesUpload onUpload={() => {}} placeholder="Click to upload or drag and drop"/>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ImportPatientsDialog;
