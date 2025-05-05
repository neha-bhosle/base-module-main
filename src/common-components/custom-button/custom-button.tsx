import { Button } from "@mui/material";
import React from "react";
import {
  paddingZero,
  filled,
  outlined,
  warning,
  disableButton,
  transformTextNone,
  editProfile,
} from "./widgets/custom-button-styles";

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
  isSubmitButton?: boolean;
}

function CustomButton(props: CustomButtonProps) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  const getButtonStyle = () => {
    let baseStyle;

    if (props.changePadding === true) {
      baseStyle = paddingZero;
    } else if (props.variant === "filled") {
      baseStyle = filled;
    } else if (props.variant === "outline") {
      baseStyle = outlined;
    } else if (props.variant === "warning") {
      baseStyle = warning;
    } else if (props.variant === "editButton") {
      baseStyle = editProfile;
    } else if (props.disabled === true) {
      baseStyle = disableButton;
    } else {
      baseStyle = transformTextNone;
    }

    if (props.label === "Save") {
      return {
        ...baseStyle,
        borderRadius: "3px",

        padding: "12.5px 28px",
      };
    }

    if (props.isSubmitButton) {
      return {
        ...baseStyle,
        borderRadius: "3px",
        padding: "12.5px 20px",
      };
    }

    return baseStyle;
  };

  return (
    <Button
      disabled={props.disabled}
      sx={getButtonStyle()}
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
