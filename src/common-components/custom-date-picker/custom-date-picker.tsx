/* eslint-disable @typescript-eslint/no-explicit-any */
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

interface DatePickerProps {
  handleDateChange?: (newValue: string) => void;
  value: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
}

function CustomDatePicker(props: DatePickerProps) {
  const { handleDateChange, value, hasError, errorMessage, placeholder } =
    props;

  const handleChange = (newValue: any) => {
    const formattedValue = dayjs(newValue).format("YYYY-MM-DD");
    if (handleDateChange) {
      handleDateChange(formattedValue);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value ? dayjs(value) : null}
          format="MM/DD/YYYY"
          enableAccessibleFieldDOMStructure={false}
          slotProps={{
            textField: {
              size: "small",
              error: hasError,
              placeholder: placeholder,
              sx: {
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  height: "36px",
                  backgroundColor: "white",
                },
                "& fieldset": {
                  border: hasError ? "1px solid #d32f2f" : "1px solid #C9CBCC",
                  borderRadius: "5px",
                },
                "& input::placeholder": {
                  color: "#9B9D9F",
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "0.024px",
                },
                "& input": {
                  color: "black",
                  fontFamily: "Figtree",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "0.024px",
                  padding: "6px",
                },
                "& .MuiIconButton-root": {
                  color: "#BCBCBC",
                  padding: "4px",
                  width: "32px",
                  height: "32px",
                },
              },
            },
          }}
          onChange={handleChange}
        />
      </LocalizationProvider>
      {hasError && (
        <Typography
          sx={{
            color: "#d32f2f",
            marginTop: "3px",
            fontFamily: "Figtree",
            fontSize: "0.75rem",
            lineHeight: "1.66",
          }}
          variant="caption"
        >
          {errorMessage}
        </Typography>
      )}
    </div>
  );
}

export default CustomDatePicker;
