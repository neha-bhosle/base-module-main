/* eslint-disable @typescript-eslint/no-explicit-any */
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, InputBase, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import {
  customInputStyles,
  errorStyle,
  inputStyle,
  placeHolderStyle
} from "./widgets/customInputStyles";
import useAuthority from "src/hooks/use-authority";

interface CustomInputProps {
  placeholder?: string;
  name?: string;
  value?: string | number;
  isNumeric?: boolean;
  hasError?: boolean;
  errorMessage?: string | unknown;
  isPassword?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disableField?: boolean;
  bgWhite?: boolean;
  showIcon?: any;
  isAuth?: boolean;
  limit?: number;
  dobSearch?: boolean;
  sinceYearRange?: boolean;
  onlyCharacters?: boolean;
  isPercentage?: boolean;
  onBlur?: () => void;
  amount?: any;
  price?: boolean;
}

export default function CustomInput(props: CustomInputProps) {
  const classes = customInputStyles();
  const { bgWhite, isAuth, isPercentage } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(props.value ? props.value : "");
  const { isPatient } = useAuthority();

  useEffect(() => {
    setInputValue(props.value ?? "");
  }, [props.value]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const regex = /^[\w\p{L}!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~\s]*$/u;
    if (isPatient) {
      if (!regex.test(e.target.value)) {
        return;
      }
    }

    if (props.dobSearch && e.target.value.includes("/")) {
      return; // Prevent input if '/' is entered and isNumeric is true
    }
    if (props.onlyCharacters && !/^[A-Za-z\s]*$/.test(e.target.value)) {
      return; // Prevent input if onlyCharacters is true and input contains non-alphabetic characters
    }
    if (isPercentage) {
      if (e.target.value >= 0 && e.target.value <= 20) {
        setInputValue(e.target.value);
        props.onChange && props.onChange(e);
      }
    }
    if (props.amount != "" && props.price) {
      if (e.target.value >= 0 && e.target.value <= props.amount) {
        setInputValue(e.target.value);
        props.onChange && props.onChange(e);
      }
    } else {
      setInputValue(e.target.value);
      props.onChange && props.onChange(e);
    }
  };

  return (
    <>
      <InputBase
        fullWidth
        autoComplete="off"
        name={props.name}
        type={showPassword ? "text" : props.isPassword ? "password" : "text"}
        placeholder={props.placeholder}
        value={inputValue}
        sx={{
          background: bgWhite ? "white" : "inherit",
          borderRadius: "5px",
          border: props.hasError ? "1px solid #d32f2f" : "1px solid #BDBDBD",
          height: isAuth ? "50px" : "40px",
          padding: "10px 10px",
          "&.Mui-focused": {
            border: "1px solid #424242",
            borderRadius: "4px !important"
          },
          "& input": {
            fontFamily: "Inter",
            fontSize: isAuth ? "14px" : "12px",
            fontStyle: "normal",
            lineHeight: "150%",
            letterSpacing: "0.048px",
            borderRadius: "8px !important",
            color: "black !important"
          },
          "& input::placeholder": {
            fontSize: isAuth ? "14px" : "12px",
            color: "black !important"
          },
          "&::placeholder, & input::placeholder, & textarea::placeholder": {
            fontSize: isAuth ? "14px" : "12px",
            color: "black !important"
          },
          "& .MuiInputBase-input::placeholder": {
            color: "black !important"
          }
        }}
        onChange={handleInputChange}
        onBlur={props.onBlur}
        error={props.hasError}
        disabled={props.disableField}
        inputMode={props.isNumeric ? "numeric" : "text"}
        onInput={
          props.isNumeric
            ? (e: ChangeEvent<HTMLInputElement>) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }
            : undefined
        }
        classes={{
          root: isAuth ? classes.textFieldRootAuth : classes.textFieldRoot,
          input: isAuth ? classes.textFieldInputAuth : classes.textFieldInput,
          focused: classes.textFieldActive,
          error: classes.textFieldError
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ color: "#BCBCBC" }}>
            {props.isPassword && (
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            )}
            {props.showIcon && (
              <Box display={"flex"} alignItems={"center"}>
                {props.showIcon}
              </Box>
            )}
          </InputAdornment>
        }
        inputProps={{
          maxLength: props.limit ? props.limit : ""
        }}
      />
      {props.hasError && (
        <Typography sx={errorStyle} variant="caption">
          {props.hasError ? props.errorMessage : ""}
        </Typography>
      )}
    </>
  );
}
