import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle
} from "@mui/material";
import { useState } from "react";
import React from "react";
import alertIcon from "../../assets/images/alert-triangle.png";
import blueWarningIcon from "../../assets/images/blueWarningIcon.png";
import orangeWarningIcon from "../../assets/images/orangeWarningIcon.png";
import CustomTextArea from "../custom-text-area/customTextArea";
import {
  cancelButtonStyles,
  headerStyles,
  labelContent,
  saveButtonStyles,
  subLabelContent
} from "./widgets/customDialogStyles";

interface CustomDialogProps {
  openCustomDialog: boolean;
  enableCross?: boolean;
  setOpenCustomDialog: (open: boolean) => void;
  labelHeader: string;
  label: string;
  leftButtonLabel: string;
  rightButtonLabel: string;
  leftButtonAction?: () => void;
  rightButtonAction: () => void;
  colorTheme?: string;
  subLabel?: string;
  showTextArea?: boolean;
  setTextInput?: React.Dispatch<React.SetStateAction<string>>;
}

const CustomDialog: React.FC<CustomDialogProps> = ({
  openCustomDialog,
  enableCross = false,
  setOpenCustomDialog,
  labelHeader,
  label,
  leftButtonLabel,
  rightButtonLabel,
  leftButtonAction,
  rightButtonAction,
  colorTheme,
  subLabel,
  showTextArea = false,
  setTextInput
}) => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClose = () => {
    setOpenCustomDialog(false);
    setText("");
    setErrorMessage("");
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    const regex = /^[a-zA-Z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]*$/;
    if (regex.test(inputText)) {
      setText(inputText);
      setTextInput?.(inputText);
      setErrorMessage(inputText.trim() === "" ? "Please enter condition." : "");
    } else {
      setErrorMessage("Please enter alphabets, numbers, and special characters.");
    }
  };

  const handleRightButtonClick = () => {
    if (showTextArea && text.trim() === "") {
      setErrorMessage("Please enter condition.");
    } else {
      rightButtonAction();
    }
  };

  return (
    <Dialog
      open={openCustomDialog}
      sx={{ "& .MuiPaper-root": { maxWidth: colorTheme === "#DC6803" ? "50vw" : "458px" } }}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      {enableCross && (
        <Box sx={{ position: "absolute", right: ".2rem", top: ".2rem" }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
      <Box sx={{ padding: "10px 20px" }}>
        <DialogTitle id="alert-dialog-title">
          <Grid container justifyContent="center">
            <img
              src={
                colorTheme === "#DC6803"
                  ? orangeWarningIcon
                  : colorTheme === "#145DA0"
                    ? blueWarningIcon
                    : alertIcon
              }
              alt="warning-icon"
            />
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Typography sx={headerStyles} mb={2}>
              {labelHeader}
            </Typography>
            <Typography sx={labelContent}>{label}</Typography>
            {subLabel && (
              <Typography sx={subLabelContent} mt={1.5}>
                {subLabel}
              </Typography>
            )}
          </Box>
          {showTextArea && (
            <Box>
              <CustomTextArea
                value={text}
                name="condition"
                placeholder="Type here..."
                minRow={5}
                onChange={handleTextChange}
                errorMessage={errorMessage}
                hasError={!!errorMessage}
              />
            </Box>
          )}
          <Grid container mt={3} justifyContent="space-between">
            <Grid item xs={5.6}>
              <Button onClick={leftButtonAction || handleClose} sx={cancelButtonStyles}>
                {leftButtonLabel}
              </Button>
            </Grid>
            <Grid item xs={5.6}>
              <Button
                onClick={handleRightButtonClick}
                sx={{
                  ...saveButtonStyles,
                  border: colorTheme
                    ? `1px solid ${colorTheme}`
                    : "1px solid var(--Error-60, #F04438)",
                  background: colorTheme ? colorTheme : "var(--Error-07, #D92D20)",
                  "&:hover": {
                    background: colorTheme ? colorTheme : "var(--Error-07, #D92D20)"
                  }
                }}>
                {rightButtonLabel}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default CustomDialog;
