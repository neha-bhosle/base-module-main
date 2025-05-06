import { Box, Grid, Typography } from "@mui/material";
// import { theme } from "../../../utils/theme";
import { useState } from "react";
import AvailabilitySLots from "./availabilitySLots";
import {
  AvailabilityConstants,
  AvailabilitySetting,
  availabilityDataInitialValue,
} from "./model/availabilityModel";
import SlotCreation from "./slot-creation";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomDatePicker from "../../../../common-components/custom-date-picker/custom-date-picker";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { SettingsFormConstants } from "../../../../constants/formConst";
export default function Availability() {
  const [isSubmitted] = useState(false);
  const [availabilityPayload, setAvailabilityPayload] =
    useState<AvailabilitySetting>({
      ...availabilityDataInitialValue,
      bookBefore: "",
    });
  const [selectedProvider, setSelectedProvider] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        borderRadius: 2,
        minHeight: "calc(100vh - 100px)",
        overflowY: "auto",
        maxHeight: "75vh",
      }}
    >
      <Grid
        spacing={3}
        sx={{
          backgroundColor: "#FFFFFF",
          borderRadius: 1,
          p: 2,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          height: "80vh",
        }}
      >
        <Grid item xs={12} md={4} lg={3} width={"20vw"}>
          <Grid mb={1}>
            <CustomLabel label={AvailabilityConstants.PROVIDER_NAME} />
          </Grid>
          <CustomInput
            placeholder={AvailabilityConstants.SELECT_PROVIDER_NAME}
            name="selectedProvider"
            onChange={() => setSelectedProvider(true)}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            {selectedProvider && (
              <>
                <Grid display={"flex"} flexDirection={"row"} gap={8}>
                  <Grid xs={6}>
                    <Grid display={"flex"} flexDirection={"column"}>
                      <Grid
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDirection={"row"}
                      >
                        <Grid mt={2} mb={2}>
                          <Typography variant="inputTitleMedium">
                            {AvailabilityConstants.DAY_WISE_AVAILABILITY}
                          </Typography>
                        </Grid>
                        <Grid>
                          <CustomButton
                            startIcon={<AddIcon />}
                            label={AvailabilityConstants.ADD_AVAILABILITY}
                            variant="editButton"
                            onClick={() => {}}
                            isSubmitButtonTwo
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        display={"flex"}
                        flexDirection={"row"}
                        gap={4}
                        pr={2}
                      >
                        <Grid
                          display={"flex"}
                          flexDirection={"row"}
                          alignItems={"center"}
                          bgcolor={"#F5F5F5"}
                          p={1.5}
                          borderRadius={3}
                          mt={2}
                        >
                          <Grid>
                            <Typography variant="bodyMedium4">
                              {AvailabilityConstants.SELECT_DATE_RANGE}
                            </Typography>
                          </Grid>
                          <Grid width={"12.2vw"} ml={4}>
                            {" "}
                            <CustomDatePicker
                              value={""}
                              placeholder="Start Date"
                            />
                          </Grid>
                          <Grid ml={4}>
                            <Typography variant="bodyMedium4">
                              {AvailabilityConstants.TO}
                            </Typography>
                          </Grid>
                          <Grid width={"12.2vw"} ml={4}>
                            {" "}
                            <CustomDatePicker
                              value={""}
                              placeholder="End Date"
                            />
                          </Grid>
                          <Grid ml={5} sx={{ cursor: "pointer" }}>
                            <KeyboardArrowDownOutlinedIcon />
                          </Grid>
                        </Grid>
                        <Grid alignItems={"center"} display={"flex"} mt={2}>
                          <DeleteOutlineOutlinedIcon />
                        </Grid>
                      </Grid>
                    </Grid>
                    {availabilityPayload && (
                      <Grid mt={4} maxHeight={"45vh"} overflow={"auto"}>
                        <AvailabilitySLots
                          isSubmitted={isSubmitted}
                          availabilityPayload={availabilityPayload}
                          setAvailabilityPayload={setAvailabilityPayload}
                        />
                      </Grid>
                    )}
                  </Grid>
                  <Grid xs={6}>
                    {availabilityPayload && (
                      <Grid maxHeight={"63vh"} overflow={"auto"}>
                        <SlotCreation
                          availabilityPayload={availabilityPayload}
                          setAvailabilityPayload={setAvailabilityPayload}
                          isSubmitted={isSubmitted}
                        />
                      </Grid>
                    )}
                  </Grid>
                </Grid>

                <Grid
                  flexDirection={"row"}
                  justifyContent={"flex-end"}
                  mt={2}
                  sx={{
                    display: "flex",
                    bottom: "0",
                    right: "0",
                    width: "100%",
                    paddingTop: 2,
                    pb: 4,
                    pr: 6,
                    position: "absolute",
                  }}
                >
                  <Grid
                    display="flex"
                    flexDirection={"row"}
                    gap={3}
                    sx={{ marginBottom: "0.5", marginRight: "1" }}
                  >
                    <Grid>
                      <CustomButton
                        variant="outline"
                        label={SettingsFormConstants.CANCEL}
                        isSubmitButton
                      />
                    </Grid>
                    <Grid>
                      <CustomButton
                        variant="filled"
                        label={SettingsFormConstants.SAVE}
                        type="submit"
                        changePadding={false}
                        isSubmitButton
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
