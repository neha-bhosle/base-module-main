import { Button } from "@mui/material";
import React from "react";
import { paddingZero, filled, outlined, warning, disableButton, transformTextNone } from "./widgets/custom-button-styles";


interface CustomButtonProps {
  onClick?: (index?: number, e?: React.MouseEvent) => void;
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: any;
  fullWidth?: boolean;
  changePadding?: boolean;
}

function CustomButton(props: CustomButtonProps) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Button
      disabled={props.disabled}
      sx={
        props.changePadding === true
          ? paddingZero
          : props.variant === "filled"
            ? filled
            : props.variant === "outline"
              ? outlined
              : props.variant === "warning"
                ? warning
                : props.disabled === true
                  ? disableButton
                  : transformTextNone
      }
      onClick={handleClick}
      type={props.type || "button"}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      fullWidth={props?.fullWidth}
    >
      {props.label}
    </Button>
  );
}

export default CustomButton;
