import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import CustomInput from "../../../../common-components/custom-input/customInput";
import CustomSelect from "../../../../common-components/custom-select/customSelect";
import CustomLabel from "../../../../common-components/customLabel/customLabel";
import { appointmentTableHeaders } from "../../../../common-components/headers/all-headers";
import ListCalenderSwitcher from "../../../../common-components/list-calender-switcher/list-calender-switcher";
import { APPOINTMENT_MOCK_DATA } from "../../../../common-components/mock-data/all-mock-data";
import CustomisedTable from "../../../../common-components/table/table";
import { AppointmentViewOptions } from "../../../../constants/formConst";
import {
  appointmentModeItems,
  appointmentStatusItems,
  appointmentTimeItems,
  clinicianItems,
  locationItems,
} from "./view-appointment-items";

const ViewAppointments = () => {
  const navigate = useNavigate();
  const [tableData] = useState(APPOINTMENT_MOCK_DATA);
  const [page, setPage] = useState(0);
  const [, setView] = useState(AppointmentViewOptions.LIST);

  const handleScheduleAppointment = () => {
    navigate("/admin/schedule-appointment");
  };

  return (
    <Grid container flexDirection="column" gap={2}>
      <Grid flexDirection="row" display="flex">
        <Grid
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
          gap={2}
        >
          <Grid flexDirection="row" display="flex" alignItems="center" gap={2}>
            <Grid pt={3}>
              <CustomInput
                showIcon={<SearchIcon />}
                bgWhite
                placeholder="Search Client"
              />
            </Grid>
            <Grid>
              <Grid>
                <CustomLabel label="Appt Mode" />
              </Grid>
              <Grid width="150px">
                <CustomSelect
                  placeholder="Appt Type"
                  value=""
                  items={appointmentModeItems}
                  backgroundColor="#FFFFFF"
                />
              </Grid>
            </Grid>
            <Grid width="150px">
              <Grid>
                <Grid>
                  <CustomLabel label="Appt Time" />
                </Grid>
                <CustomSelect
                  placeholder="Appt Time"
                  value=""
                  items={appointmentTimeItems}
                  backgroundColor="#FFFFFF"
                />
              </Grid>
            </Grid>
            <Grid width="150px">
              <Grid>
                <CustomLabel label="Appt Status" />
              </Grid>
              <CustomSelect
                placeholder="Appt Status"
                value=""
                items={appointmentStatusItems}
                backgroundColor="#FFFFFF"
              />
            </Grid>
            <Grid width="150px">
              <Grid>
                <Grid>
                  <CustomLabel label="Location" />
                </Grid>
                <CustomSelect
                  placeholder="Location"
                  value=""
                  items={locationItems}
                  backgroundColor="#FFFFFF"
                />
              </Grid>
            </Grid>
            <Grid width="150px">
              <Grid>
                <Grid>
                  <CustomLabel label="Clinician Name" />
                </Grid>
                <CustomSelect
                  placeholder="Clinician Name"
                  value=""
                  items={clinicianItems}
                  backgroundColor="#FFFFFF"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            flexDirection="row"
            display="flex"
            alignItems="center"
            gap={2}
            pt={2}
          >
            <Grid>
              <ListCalenderSwitcher
                option1={AppointmentViewOptions.LIST}
                option2={AppointmentViewOptions.CALENDAR}
                buttonWidth={"80px"}
                onChange={(option: string) => {
                  setView(
                    option === AppointmentViewOptions.LIST
                      ? AppointmentViewOptions.LIST
                      : AppointmentViewOptions.CALENDAR
                  );
                }}
              />
            </Grid>
            <Grid>
              <CustomButton
                variant="filled"
                label="Schedule Appointment"
                startIcon={<AddIcon />}
                changePadding={true}
                isSubmitButtonTwo
                onClick={handleScheduleAppointment}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <CustomisedTable
          headCells={appointmentTableHeaders}
          tableData={tableData}
          page={page}
          setPage={setPage}
          showCPTAndICDPagination
          setHeight="75vh"
          removeRadius={false}
        />
      </Grid>
    </Grid>
  );
};

export default ViewAppointments;
