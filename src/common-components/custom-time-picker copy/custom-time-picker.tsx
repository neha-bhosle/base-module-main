/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { errorStyle, placeHolderStyle } from "./style";

interface TimePickerProps {
  handleTimeChange?: (newValue: string) => void;
  value: string;
  hasError?: boolean;
  errorMessage?: string;
}

function CustomTimePicker(props: TimePickerProps) {
  const { handleTimeChange, value, hasError, errorMessage } = props;

  const handleChange = (newValue: any) => {
    const formattedValue = dayjs(newValue).format("HH:mm:ss");
    if (handleTimeChange) {
      handleTimeChange(formattedValue);
    }
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          value={value ? dayjs(`2023-01-01T${value}`) : null}
          onChange={handleChange}
          sx={{
            paddingTop: "0px",
            "& .MuiFormControl-root": { minWidth: "100% !important" },
            "& fieldset": {
              border: hasError
                ? "1px solid #d32f2f"
                : "1px solid rgba(0, 0, 0, 0.23)",
            },
            "& .MuiOutlinedInput-root": { height: "40px" },
            "& input::placeholder": {
              ...placeHolderStyle,
            },
            "& input": {
              color: "black",
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 400,
              padding: "0px 14px",
            },
          }}
        />
      </LocalizationProvider>
      <Typography sx={errorStyle} variant="caption" color="error">
        {hasError ? errorMessage : ""}
      </Typography>
    </>
  );
}

export default CustomTimePicker;
