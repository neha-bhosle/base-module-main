import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { ButtonBase, Grid, Tooltip } from "@mui/material";
import { useState } from "react";
import { theme } from "../../utils/theme";
import { AppointmentViewOptions } from "../../constants/formConst";

type ListCalenderSwitcherProps = {
  option1: string;
  option2: string;
  buttonWidth: string;
  // compactHeight?: boolean;
  // variant: "dark" | "light";
  onChange: (option: string) => void;
};

export const optionDeselectedIcon = {
  color: theme.palette.primary.main,
};

export const optionSelectedIcon = {
  color: theme.palette.common.white,
};

export const optionDeselectedButton = {
  backgroundColor: theme.palette.common.white,
  borderRadius: "4px",
};

export const optionSelectedButton = {
  backgroundColor: theme.palette.primary.main,
  borderRadius: "4px ",
  padding: "3px",
  // fontSize: "16px",
};

const ListCalenderSwitcher = (props: ListCalenderSwitcherProps) => {
  const { onChange, option1 } = props;
  const [option, setOption] = useState(option1);

  const handleOptionChange = (newOption: string) => {
    setOption((prevState) => {
      if (prevState === newOption) {
        return newOption;
      }
      return newOption;
    });
    onChange(newOption);
  };

  return (
    <Grid
      container
      width={"80px"}
      columnGap={1}
      sx={{
        borderRadius: "4px",
        boxShadow: `0 0 4px 0 ${theme.palette.grey[400]}`,
      }}
      padding={"8px"}
      bgcolor={theme.palette.common.white}
    >
      <Tooltip title="List">
        <ButtonBase
          sx={
            option === AppointmentViewOptions.LIST
              ? optionSelectedButton
              : optionDeselectedButton
          }
          onClick={() => handleOptionChange(AppointmentViewOptions.LIST)}
        >
          <ListAltIcon
            fontSize="small"
            sx={
              option === AppointmentViewOptions.LIST
                ? optionSelectedIcon
                : optionDeselectedIcon
            }
          />
        </ButtonBase>
      </Tooltip>
      <Tooltip title="Calender">
        <ButtonBase
          sx={
            option === AppointmentViewOptions.CALENDAR
              ? optionSelectedButton
              : optionDeselectedButton
          }
          onClick={() => handleOptionChange(AppointmentViewOptions.CALENDAR)}
        >
          <CalendarMonthIcon
            fontSize="small"
            sx={
              option === AppointmentViewOptions.CALENDAR
                ? optionSelectedIcon
                : optionDeselectedIcon
            }
          />
        </ButtonBase>
      </Tooltip>
    </Grid>
  );
};

export default ListCalenderSwitcher;
