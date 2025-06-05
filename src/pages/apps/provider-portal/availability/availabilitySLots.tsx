import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Box, Grid } from "@mui/material";
import {
  AvailabilityConstants,
  AvailabilitySetting,
  DAYS,
  DaySlot,
} from "./model/availabilityModel";

import React from "react";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomTimePicker from "../../../../common-components/custom-time-picker/custom-time-picker";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import { toCamelCase } from "../../../../common-components/utils/toCamelCase";

interface AccordianProps {
  availabilityPayload: AvailabilitySetting;
  setAvailabilityPayload: React.Dispatch<
    React.SetStateAction<AvailabilitySetting>
  >;
  isSubmitted: boolean;
}

const AvailabilitySLots: React.FC<AccordianProps> = (props) => {
  const { availabilityPayload, setAvailabilityPayload, isSubmitted } = props;

  const dayOptions = Object.keys(DAYS)?.map((day) => {
    return {
      value: day,
      label: toCamelCase(day),
    };
  });

  const handleDelete = (index: number) => {
    const temp = [...availabilityPayload?.daySlots];
    const updatedDaySlots = [...temp.slice(0, index), ...temp.slice(index + 1)];

    setAvailabilityPayload((prev) => ({
      ...prev,
      daySlots: updatedDaySlots,
    }));
  };

  const handleAdd = () => {
    setAvailabilityPayload((prev) => ({
      ...prev,
      daySlots: [
        ...prev.daySlots,
        {
          day: "",
          startTime: "",
          endTime: "",
          locationUuid: "",
          availabilityMode: "IN_PERSON",
          location: {},
          locationName: "",
        },
      ],
    }));
  };

  const handleDayChange = (index: number, value: string) => {
    const newData = { ...availabilityPayload };
    newData.daySlots = newData?.daySlots?.map((slot) => ({ ...slot }));
    newData.daySlots[index].day = value;
    setAvailabilityPayload(newData);
  };

  const handleEndTime = (e: any, index: number) => {
    const newData = { ...availabilityPayload };
    newData.daySlots = newData?.daySlots?.map((slot) => ({ ...slot }));
    newData.daySlots[index].endTime = e;
    setAvailabilityPayload(newData);
  };

  const handleStartTime = (e: any, index: number) => {
    const newData = { ...availabilityPayload };
    newData.daySlots = newData?.daySlots?.map((slot) => ({ ...slot }));
    newData.daySlots[index].startTime = e;
    setAvailabilityPayload(newData);
  };

  const handleLocationChange = (index: number, name: string, value: string) => {
    const newData = { ...availabilityPayload };
    newData.daySlots = newData?.daySlots?.map((slot) => ({ ...slot }));
    newData.daySlots[index].locationUuid = value;
    newData.daySlots[index].locationName = name;
    newData.daySlots[index].location = { [value]: name };
    setAvailabilityPayload(newData);
  };

  return (
    <>  
      {availabilityPayload &&
        availabilityPayload?.daySlots?.map((item: DaySlot, index: number) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ mt: index !== 0 ? 0.2 : 0 }}
          >
            <Grid item xs={3}>
              <CustomLabel label={AvailabilityConstants.DAY} isRequired />
              <CustomSelect
                name="day"
                hasError={isSubmitted && !item.day}
                errorMessage={AvailabilityConstants.DAY_REQUIRED}
                value={item.day}
                placeholder={AvailabilityConstants.SELECT_DAY}
                items={dayOptions}
                onChange={(e) => handleDayChange(index, e.target.value)}
              />
            </Grid>
            <Grid item xs={2.5} height={"20px"}>
              <CustomLabel label={AvailabilityConstants.FROM} isRequired />
              <CustomTimePicker
                hasError={isSubmitted && !item.startTime}
                errorMessage={AvailabilityConstants.ENTER_FROM_TIME}
                handleTimeChange={(e) => handleStartTime(e, index)}
                value={item.startTime}
              />
            </Grid>
            <Grid item xs={2.5}>
              <CustomLabel label={AvailabilityConstants.TO} isRequired />
              <CustomTimePicker
                hasError={isSubmitted && !item.endTime}
                errorMessage={AvailabilityConstants.ENTER_TILL_TIME}
                handleTimeChange={(e) => handleEndTime(e, index)}
                value={item.endTime}
              />
            </Grid>

            <Grid item xs={3}>
              <CustomLabel label={AvailabilityConstants.LOCATION} isRequired />
              <CustomSelect
                name="locationUuid"
                hasError={isSubmitted && !item.locationUuid}
                errorMessage={AvailabilityConstants.ENTER_LOCATION}
                value={item.locationUuid}
                placeholder={AvailabilityConstants.SELECT_LOCATION}
                onChange={(e) =>
                  handleLocationChange(index, e.target.name, e.target.value)
                }
                items={[]}
              />
            </Grid>
            <Grid item xs={1} mt={1}>
              <CustomLabel label={"\u200B"} isRequired={false} />
              <DeleteOutlineOutlinedIcon
                style={{
                  cursor: "pointer",
                  opacity:
                    availabilityPayload?.daySlots.length === 1 ? "50%" : "100%",
                  pointerEvents:
                    availabilityPayload?.daySlots.length === 1
                      ? "none"
                      : "inherit",
                }}
                onClick={() => handleDelete(index)}
              />
            </Grid>
          </Grid>
        ))}
      <Grid item xs={12} mt={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            gap: "8px",
            width: "fit-content",
          }}
        >
         </Box>
        <CustomButton
          startIcon={<AddIcon />}
          label={AvailabilityConstants.ADD_MORE}
          onClick={handleAdd}
          isSubmitButtonTwo
          variant="editButton"
        />
      </Grid>
    </>
  );
};

export default AvailabilitySLots;
