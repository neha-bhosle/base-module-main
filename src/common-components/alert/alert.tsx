import MuiAlert, { AlertColor, AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { snackbarAction } from "../../redux/auth/snackbarReducer";
import { RootState } from "../../redux/store";
import { Typography } from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="standard" {...props} />;
});

export const AlertSeverity = {
  SUCCESS: "success" as AlertColor,
  ERROR: "error" as AlertColor,
  WARNING: "warning" as AlertColor,
  INFO: "info" as AlertColor
};

const SnackbarAlert = () => {
  const dispatch = useDispatch();
  const { isSnackbarOpen, severity, message } = useSelector(
    (state: RootState) => state.snackbarReducer
  );

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    event;
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarAction.hideSnackbarAction());
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      open={isSnackbarOpen}
      autoHideDuration={3000}
      onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%" }}>
        <Typography variant="bodyRegular4">{message}</Typography>
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
