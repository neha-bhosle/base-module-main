import AddIcon from "@mui/icons-material/Add";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import DrawerBS from "../../../../common-components/drawer-bs/custom-drawer";

import {
  OtherSettingsTabs,
  SettingsFormConstants,
} from "../../../../constants/formConst";
import { tabLabel, tabSx } from "../../../../constants/tabs-widget";
import AddFeeScheduleDialog from "./fee-schedule/add-fee-schedule-dialog";
import CustomSelect from "../../../../common-components/custom-select/customSelect";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const OtherSettingsMasterTabs = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const tabRoutes = Object.values(OtherSettingsTabs);
  const [addFeeScheduleDialog, setAddFeeScheduleDialog] = useState(false);

  useEffect(() => {
    if (location.pathname.endsWith("settings-tabs")) {
      navigate("availability");
    }
    const currentPath = location.pathname.split("/").pop();
    const tabIndex = tabRoutes.findIndex(
      (tab) => tab.toLowerCase() === currentPath
    );
    if (tabIndex !== -1) {
      setValue(tabIndex);
    }
  }, [location.pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(tabRoutes[newValue].toLowerCase());
  };
  return (
    <Box>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        alignItems={"center"}
        ml={1}
        mb={1}
      >
        <Grid sx={{ cursor: "pointer" }}>
          <WestOutlinedIcon />
        </Grid>
        <Grid>
          {" "}
          <Typography variant="titleMediumProfileBold">
            {SettingsFormConstants.OTHER_SETTINGS}
          </Typography>
        </Grid>
      </Grid>
      <Box
        display="flex"
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"100%"}
        alignItems="center"
      >
        <Box sx={{ ...tabSx, ml: 0.5 }}>
          <Tabs value={value} onChange={handleChange}>
            {tabRoutes.map((item: string, index: number) => (
              <Tab
                key={index}
                label={item}
                {...a11yProps(index)}
                sx={tabLabel}
              />
            ))}
          </Tabs>
        </Box>
        <Grid mr={1}>
          {value === 1 && (
            <Grid display={"flex"} flexDirection={"row"} gap={2}>
              <Grid width={"8vw"}>
                <CustomSelect
                  placeholder={"Code Type"}
                  value={""}
                  items={[]}
                  backgroundColor={"#FFF"}
                />
              </Grid>
              <Grid>
                <CustomButton
                  variant="filled"
                  label={SettingsFormConstants.ADD_NEW_FEE_SCHEDULE}
                  startIcon={<AddIcon />}
                  onClick={() => setAddFeeScheduleDialog(true)}
                  isSubmitButtonTwo
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>

      <Box mt={1} p={1}>
        <Outlet />
      </Box>
      <DrawerBS
        title={SettingsFormConstants.ADD_FEE_SCHEDULE}
        open={addFeeScheduleDialog}
        onClose={() => setAddFeeScheduleDialog(false)}
        anchor={"right"}
        drawerWidth="30vw"
      >
        <AddFeeScheduleDialog
          handleClose={() => setAddFeeScheduleDialog(false)}
        />
      </DrawerBS>
    </Box>
  );
};

export default OtherSettingsMasterTabs;
