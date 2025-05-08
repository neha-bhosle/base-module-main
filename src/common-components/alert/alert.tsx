import { Snackbar, Box, IconButton, Typography, Paper } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { snackbarAction } from "../../redux/auth/snackbarReducer";
import { RootState } from "../../redux/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

export type AlertColor = "success" | "info" | "warning" | "error";

export const AlertSeverity = {
  SUCCESS: "success" as AlertColor,
  ERROR: "error" as AlertColor,
  WARNING: "warning" as AlertColor,
  INFO: "info" as AlertColor,
};

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const { isSnackbarOpen, message, messageTwo } = useSelector(
    (state: RootState) => state.snackbarReducer
  );

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackbarAction.hideSnackbarAction());
  };

  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      sx={{ mt: 1 }}
    >
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          bgcolor: "#FFFFFF",
          py: "12px",
          px: "16px",
          borderRadius: "4px",
          boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.08)",
          minWidth: "320px",
          maxWidth: "400px",
        }}
      >
        <CheckCircleIcon
          sx={{
            color: "#2E7D32",
            fontSize: "20px",
            flexShrink: 0,
            mt: "2px",
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#111111",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
            }}
          >
            {message}
          </Typography>
          {messageTwo && (
            <Typography
              sx={{
                color: "#74797B",
                fontSize: "14px",
                lineHeight: "20px",
                mt: 0.5,
              }}
            >
              {messageTwo}
            </Typography>
          )}
        </Box>
        <IconButton
          onClick={handleClose}
          size="small"
          sx={{
            padding: 0,
            marginLeft: "8px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <CloseIcon sx={{ fontSize: "16px", color: "#666666" }} />
        </IconButton>
      </Paper>
    </Snackbar>
  );
};

export default CustomSnackbar;
