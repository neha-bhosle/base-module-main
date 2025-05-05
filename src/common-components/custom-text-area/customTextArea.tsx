import { TextareaAutosize, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { errorStyle } from "../custom-input/widgets/customInputStyles";
import { editTextAreaStyle } from "./widgets/customTextAreaStyles";

interface CustomTextAreaProps {
  placeholder?: string;
  name?: string;
  value?: string | number | undefined | null;
  minRow?: number;
  maxRow?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  isDisabled?: boolean;
  hasError?: boolean;
  errorMessage?: string | undefined;
  defaultValue?: string;
  setHeight?: string;
}

function CustomTextArea(props: CustomTextAreaProps) {
  const classes = editTextAreaStyle();

  return (
    <>
      <TextareaAutosize
        disabled={props.isDisabled && props.isDisabled}
        minRows={props.minRow}
        maxRows={props.maxRow || 10}
        draggable={false}
        name={props.name}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value ? props.value : ""}
        onChange={props.onChange}
        className={`${classes.textArea} ${props.hasError ? classes.errorMessage : ""}`}
        style={{
          height: props.setHeight ? "35vh !important" : "inherit",
          color: props.isDisabled ? "rgba(0, 0, 0, 0.38)" : "black",
          whiteSpace: "pre-wrap"
        }}
      />
      <Typography sx={errorStyle} variant="caption">
        {props?.hasError ? props?.errorMessage : ""}
      </Typography>
    </>
  );
}

export default CustomTextArea;
