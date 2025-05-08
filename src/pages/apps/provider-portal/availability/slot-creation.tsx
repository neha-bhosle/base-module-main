import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomTimePicker from "../../../../common-components/custom-time-picker/custom-time-picker";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import DatePickerFieldSlot from "../../../../common-components/date-picker-field/date-picker-Slot";
import { dynamicTimeZone } from "../../../../common-components/utils/timeZone";
import {
  AvailabilityConstants,
  AvailabilitySetting,
} from "./model/availabilityModel";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import { SelectChangeEvent } from "@mui/material/Select";
// import { toggleButtonStyles } from "./common-widgets/widget";

interface AccordianProps {
  availabilityPayload: AvailabilitySetting;
  setAvailabilityPayload: React.Dispatch<
    React.SetStateAction<AvailabilitySetting>
  >;
  isSubmitted: boolean;
}

const SlotCreation: React.FC<AccordianProps> = (props) => {
  // const [initialConsultTime, setInitialConsultTime] = useState(30);
  // const [followupConsultTime, setFollowupConsultTime] = useState(15);
  const { availabilityPayload, setAvailabilityPayload, isSubmitted } = props;
  // const timeSlot = ["15", "30", "45", "60"];

  // const handleBookingWindowChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const newData = { ...availabilityPayload };
  //   newData.bookingWindow = parseInt(e.target.value);
  //   setAvailabilityPayload(newData);
  // };

  const handleTimeZoneChange = (e: SelectChangeEvent<string>) => {
    const newData = { ...availabilityPayload };
    newData.timezone = e.target.value as AvailabilitySetting["timezone"];
    setAvailabilityPayload(newData);
  };

  const handleBlockDays = (val: Date | null, index: number) => {
    if (!val) return;
    const dateStr = val.toISOString().split("T")[0];
    const temp = [...availabilityPayload.blockDays];
    temp[index] = {
      ...temp[index],
      startTime: dateStr + "T00:00:00Z",
      endTime: dateStr + "T00:00:00Z",
    };

    setAvailabilityPayload((prev) => ({
      ...prev,
      blockDays: temp,
    }));
  };

  const handleBlockDaysFrom = (val: string, index: number) => {
    const temp = [...availabilityPayload.blockDays];
    const parts = temp[index].startTime.split("T");
    const datePart = parts[0];
    const newDatetime = datePart + "T" + val + "Z";
    temp[index] = {
      ...temp[index],
      startTime: newDatetime,
    };

    setAvailabilityPayload((prev) => ({
      ...prev,
      blockDays: temp,
    }));
  };

  const handleBlockDaysTill = (val: string, index: number) => {
    const temp = [...availabilityPayload.blockDays];
    const parts = temp[index].endTime.split("T");
    const datePart = parts[0];
    const newDatetime = datePart + "T" + val + "Z";
    temp[index] = {
      ...temp[index],
      endTime: newDatetime,
    };

    setAvailabilityPayload((prev) => ({
      ...prev,
      blockDays: temp,
    }));
  };

  const handleAdd = () => {
    setAvailabilityPayload((prev) => ({
      ...prev,
      blockDays: [...prev.blockDays, { startTime: "", endTime: "" }],
    }));
  };

  const handleDelete = (index: number) => {
    const temp = [...availabilityPayload.blockDays];
    const updatedBlockDays = [
      ...temp.slice(0, index),
      ...temp.slice(index + 1),
    ];

    setAvailabilityPayload((prev) => ({
      ...prev,
      blockDays: updatedBlockDays,
    }));
  };

  const mappedTimeZones = dynamicTimeZone.map((item) => ({
    value: item.key,
    label: item.value,
  }));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="inputTitleMedium">
          {AvailabilityConstants.SLOT_CREATION_SETTING}{" "}
        </Typography>
      </Grid>
      {/* <Grid item xs={3.6}>
        <CustomLabel label={AvailabilityConstants.BOOKING_WINDOW} isRequired />
        <CustomSelect
          name="bookingWindow"
          value={availabilityPayload?.bookingWindow.toString() || ""}
          placeholder={AvailabilityConstants.SELECT_BOOKING_WINDOW}
          items={bookingWindowOptions}
          onChange={handleBookingWindowChange}
          hasError={isSubmitted && !availabilityPayload?.bookingWindow}
          errorMessage={
            isSubmitted && !availabilityPayload?.bookingWindow
              ? AvailabilityConstants.BOOKING_WINDOW_REQUIRED
              : ""
          }
        />
      </Grid> */}
      <Grid item xs={4.8}>
        <CustomLabel label={AvailabilityConstants.TIMEZONE} isRequired />
        <CustomSelect
          value={availabilityPayload?.timezone || ""}
          items={mappedTimeZones}
          placeholder={AvailabilityConstants.SELECT_TIMEZONE}
          onChange={handleTimeZoneChange}
          hasError={isSubmitted && !availabilityPayload?.timezone}
          errorMessage={
            isSubmitted && !availabilityPayload?.timezone
              ? AvailabilityConstants.TIMEZONE_REQUIRED
              : ""
          }
        />
      </Grid>
      {/* <Grid item xs={12}>
        <Box display={"flex"} columnGap={0.4}>
          <Typography variant="body4">
            {AvailabilityConstants.NEW_APPOINTMENTS_TIME}
          </Typography>
          <Typography variant="body4">
            ({AvailabilityConstants.MINUTES})
          </Typography>
        </Box>
        <Grid container pt={1} pb={1}>
          <ToggleButtonGroup
            exclusive
            onChange={(e, selectedValue) => {
              if (selectedValue) {
                setInitialConsultTime(parseInt(selectedValue));
                setAvailabilityPayload((prev) => ({
                  ...prev,
                  initialConsultTime: parseInt(selectedValue),
                }));
              }
            }}
            value={initialConsultTime.toString()}
            sx={toggleButtonStyles}
          >
            {timeSlot.map((item: string) => (
              <ToggleButton
                key={item}
                sx={{
                  pointerEvents:
                    initialConsultTime.toString() === item ? "none" : "inherit",
                }}
                value={item}
              >
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box display={"flex"} columnGap={0.4}>
          <Typography variant="body4">
            {AvailabilityConstants.FOLLOWUP_APPOINTMENT_TIME}
          </Typography>
          <Typography variant="body4">
            ({AvailabilityConstants.MINUTES})
          </Typography>
        </Box>

        <Grid container pt={1} pb={1}>
          <ToggleButtonGroup
            exclusive
            onChange={(e, selectedValue) => {
              if (selectedValue) {
                setFollowupConsultTime(parseInt(selectedValue));
                setAvailabilityPayload((prev) => ({
                  ...prev,
                  followupConsultTime: parseInt(selectedValue),
                }));
              }
            }}
            value={followupConsultTime.toString()}
            sx={toggleButtonStyles}
          >
            {timeSlot.map((item: string) => (
              <ToggleButton
                key={item}
                sx={{
                  pointerEvents:
                    followupConsultTime.toString() === item
                      ? "none"
                      : "inherit",
                }}
                value={item}
              >
                {item}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
      </Grid> */}
      <Grid item xs={12}>
        <Grid item xs={12} mt={2} mb={2}>
          <Typography variant="inputTitleMedium">
            {AvailabilityConstants.BLOCK_DAYS}
          </Typography>
        </Grid>

        {availabilityPayload.blockDays.map((item, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ mt: index === 0 ? 0 : 0.2 }}
          >
            <Grid item xs={3.5}>
              <CustomLabel label={AvailabilityConstants.DATE} isRequired />
              <DatePickerFieldSlot
                value={item.startTime}
                onChange={(val) => handleBlockDays(val, index)}
                hasError={
                  isSubmitted && (!item.startTime || item.startTime.length < 15)
                }
                // placeholder={AvailabilityConstants.START_DATE as string}
                // errorMessage={AvailabilityConstants.DATE_REQUIRED}
              />
            </Grid>
            <Grid item xs={3.5}>
              <CustomLabel label={AvailabilityConstants.FROM} isRequired />
              <CustomTimePicker
                value={item.startTime}
                handleTimeChange={(val) => handleBlockDaysFrom(val, index)}
                hasError={
                  isSubmitted && (!item.startTime || item.startTime.length < 15)
                }
                errorMessage={AvailabilityConstants.ENTER_FROM_TIME}
              />
            </Grid>
            <Grid item xs={3.5}>
              <CustomLabel label={AvailabilityConstants.TO} isRequired />
              <CustomTimePicker
                value={item.endTime}
                handleTimeChange={(val) => handleBlockDaysTill(val, index)}
                hasError={
                  isSubmitted && (!item.endTime || item.endTime.length < 15)
                }
                errorMessage={AvailabilityConstants.ENTER_TILL_TIME}
              />
            </Grid>
            <Grid item xs={1.5} mt={1}>
              <CustomLabel label={"\u200B"} isRequired={false} />
              <DeleteOutlineOutlinedIcon
                style={{
                  cursor: "pointer",
                  opacity:
                    availabilityPayload.blockDays.length === 1 ? "50%" : "100%",
                  pointerEvents:
                    availabilityPayload.blockDays.length === 1
                      ? "none"
                      : "inherit",
                }}
                onClick={() => handleDelete(index)}
              />
            </Grid>
          </Grid>
        ))}
      </Grid>

      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: "8px",
            width: "fit-content",
          }}
        >
          <CustomButton
            label={AvailabilityConstants.ADD_BLOCK_DAYS}
            startIcon={<AddIcon />}
            onClick={handleAdd}
            variant="editButton"
            isSubmitButtonTwo
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SlotCreation;
