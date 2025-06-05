import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { selectInputStyle } from "./widgets";
import { Typography } from "@mui/material";
import { theme } from "../../utils/theme";
import { errorStyle } from "../custom-input/widgets/customInputStyles";
import { customSelectStyles } from "../custom-select/widgets/customSelectStyles";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

type CustomMultiSelectProps = {
  options: { key: string; value: string }[];
  value: string[];
  onChange: (selectedValues: string[]) => void;
  bgWhite?: boolean;
  placeholder: string;
  errMsg?: string;
  hasError?: boolean;
};

const CustomMultiSelect = (props: CustomMultiSelectProps) => {
  const { options, value, onChange, bgWhite, placeholder, errMsg, hasError } =
    props;

  const optionKeys = options?.map((opt) => opt.key).filter((opt) => opt) || [];
  const optionValues =
    options?.map((opt) => opt.value).filter((opt) => opt) || [];
  const preSelectedCleanValues = value
    .filter((val) => optionKeys.includes(val))
    .map((val) => options.find((opt) => opt.key === val)?.value || "")
    .filter((val) => val);
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>(
    preSelectedCleanValues
  );

  const areArraysSame = (arr1: string[], arr2: string[]) => {
    const filteredArr1 = arr1.filter((item) => !arr2.includes(item));
    const filteredArr2 = arr2.filter((item) => !arr1.includes(item));

    return filteredArr1.length === 0 && filteredArr2.length === 0;
  };

  React.useEffect(() => {
    if (!areArraysSame(selectedOptions, preSelectedCleanValues)) {
      setSelectedOptions(preSelectedCleanValues);
    }
  }, [preSelectedCleanValues, selectedOptions]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;

    const selectedValArr = value as string[];
    setSelectedOptions(selectedValArr);
    onChange(
      selectedValArr
        .map((value) => options.find((opt) => opt.value === value)?.key || "")
        .filter((val) => val)
    );
  };

  return (
    <div>
      <Select
        sx={{
          ...selectInputStyle,
          backgroundColor: bgWhite === true ? "inherit" : "white",
        }}
        multiple
        size="small"
        displayEmpty
        value={selectedOptions}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          const classes = customSelectStyles();
          return (
            <Typography
              variant="buttonLinkAndField3"
              className={classes.headerLabel}
              sx={{
                color:
                  selected.length > 0
                    ? theme.palette.grey[800]
                    : theme.palette.grey[500],
              }}
            >
              {selected.join(", ") || placeholder}
            </Typography>
          );
        }}
        MenuProps={MenuProps}
        error={hasError}
      >
        {optionValues.map((optVal) => (
          <MenuItem key={optVal} value={optVal} sx={{ padding: 0 }}>
            <Checkbox checked={selectedOptions.indexOf(optVal) > -1} />
            <ListItemText primary={optVal} />
          </MenuItem>
        ))}
      </Select>
      {hasError && (
        <Typography sx={errorStyle} variant="caption">
          {hasError ? errMsg : ""}
        </Typography>
      )}
    </div>
  );
};

export default CustomMultiSelect;
