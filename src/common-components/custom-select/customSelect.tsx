import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { errorStyle } from "../custom-input/widgets/customInputStyles";
import { customSelectStyles, selectInputStyle } from "./widgets/customSelectStyles";

interface CustomSelectProps {
  placeholder: string;
  name?: string;
  value: string;
  items: { value: string; label: string }[];
  onChange?: (e: SelectChangeEvent<string>) => void;
  hasError?: boolean;
  errorMessage?: string;
  isDisabled?: boolean;
  bgWhite?: boolean;
}

function CustomSelect(props: CustomSelectProps) {
  const classes = customSelectStyles();
  const { items, bgWhite, onChange } = props;

  const handleValue = (e: SelectChangeEvent<string>) => {
    const selectedLabel = e.target.value;
    const selectedKey = props.items.find((item) => item.label === selectedLabel)?.value || "";
    e.target.value = selectedKey;

    if (onChange) onChange(e);
  };

  const getLabel = (value: string) => {
    return items.find((item) => item.value === value)?.label || "";
  };

  return (
    <>
      <Select
        disabled={props.isDisabled && props.isDisabled}
        sx={{ ...selectInputStyle, backgroundColor: bgWhite === true ? "inherit" : "inherit" }}
        displayEmpty
        name={props?.name}
        value={getLabel(props.value)}
        onChange={handleValue}
        error={props.hasError}
        renderValue={(selected) => (
          <Typography
            className={classes.headerLabel}
            sx={{
              color: selected ? "black !important" : "a19a9a !important"
            }}>
            {selected || props?.placeholder}
          </Typography>
        )}>
        {props?.items && props?.items?.length !== 0 ? (
          props?.items?.map((option) => (
            <MenuItem key={option.value} value={option.label}>
              <Typography className={classes.menuLabel}>{option.label}</Typography>
            </MenuItem>
          ))
        ) : (
          <MenuItem value="">
            <Typography className={classes.menuLabel}>No options available</Typography>
          </MenuItem>
        )}
      </Select>
      {props.hasError && (
        <Typography sx={errorStyle} variant="caption">
          {props.hasError ? props.errorMessage : ""}
        </Typography>
      )}
    </>
  );
}

export default CustomSelect;
