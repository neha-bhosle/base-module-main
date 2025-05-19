import { Grid, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { tabLabel, tabSx } from "../../../../../constants/sub-tabs-widgets";
import CustomButton from "../../../../../common-components/custom-button/custom-button";
import DrawerBS from "../../../../../common-components/drawer-bs/custom-drawer";
import AddClinicianDialog from "./clinician/add-clinician-dialog";
import AddStaffDialog from "./staff/add-staff-dialog";
import {
  UserTabs as UserTabsEnum,
  UserTabRoutes,
  TabConst,
} from "../../../../../constants/formConst";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MastertabsConstUsers = Object.values(UserTabsEnum);

export default function UserTabs() {
  const tabLabels: string[] = Object.values(UserTabsEnum);
  const [searchParams] = useSearchParams();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [addStaffDialog, setAddStaffDialog] = React.useState(false);
  const [addClinicianDialog, setAddClinicianDialog] = React.useState(false);

  const tabRoutes = Object.values(UserTabRoutes);

  React.useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setValue(+tab);
    } else {
      navigate(tabRoutes[0]);
    }
  }, [searchParams, navigate]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabRoutes[newValue]);
  };

  return (
    <Box>
      <Box>
        <Grid
          display="flex"
          flexDirection={"row"}
          justifyContent={"space-between"}
          mr={1}
        >
          <Box sx={{ ...tabSx }}>
            <Tabs value={value} onChange={handleChange}>
              {tabLabels.map((item: string, index: number) => (
                <Tab
                  key={index}
                  label={item}
                  {...a11yProps(index)}
                  sx={tabLabel}
                />
              ))}
            </Tabs>
          </Box>

          {value === 0 && (
            <Grid>
              <CustomButton
                variant="filled"
                label={TabConst.ADD_STAFF}
                startIcon={<AddIcon />}
                changePadding={true}
                onClick={() => setAddStaffDialog(true)}
              />
            </Grid>
          )}
          {value === 1 && (
            <Grid>
              <CustomButton
                variant="filled"
                label={TabConst.ADD_CLINICIAN}
                startIcon={<AddIcon />}
                changePadding={true}
                onClick={() => setAddClinicianDialog(true)}
              />
            </Grid>
          )}
        </Grid>
      </Box>
      <Box mt={2}>
        <Outlet />
      </Box>

      <DrawerBS
        title={TabConst.ADD_STAFF}
        open={addStaffDialog}
        onClose={() => setAddStaffDialog(false)}
        anchor={"right"}
        drawerWidth="32vw"
      >
        <AddStaffDialog handleClose={() => setAddStaffDialog(false)} />
      </DrawerBS>
      <DrawerBS
        title={TabConst.ADD_CLINICIAN}
        open={addClinicianDialog}
        onClose={() => setAddClinicianDialog(false)}
        anchor={"right"}
        drawerWidth="52vw"
      >
        <AddClinicianDialog handleClose={() => setAddClinicianDialog(false)} />
      </DrawerBS>
    </Box>
  );
}
