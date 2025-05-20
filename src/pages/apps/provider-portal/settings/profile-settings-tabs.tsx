import AddIcon from "@mui/icons-material/Add";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import CustomButton from "../../../../common-components/custom-button/custom-button";
import DrawerBS from "../../../../common-components/drawer-bs/custom-drawer";
import {
  PracticeSettingsRoutes,
  PracticeSettingsTabs,
  SettingsFormConstants,
} from "../../../../constants/formConst";
import { tabLabel, tabSx } from "../../../../constants/tabs-widget";
import AddContactsDialog from "./contacts/add-contacts-dialog";
import AddLocationDialog from "./location/add-location-dialog";
import EditProfileDialog from "./profile/edit-profile-dialog";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MastertabsConstBilling = Object.values(PracticeSettingsTabs);

export default function SettingsTab() {
  const tabLabels: string[] = Object.values(PracticeSettingsTabs);
  const [editProfileDialog, setEditProfileDialog] = React.useState(false);
  const [addLocationDialog, setAddLocationDialog] = React.useState(false);
  const [addContactDialog, setAddContactDialog] = React.useState(false);
  const [searchParams] = useSearchParams();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  // Get profile data from redux store
  const { data: profileData } = useSelector(
    (state: RootState) => state.GetAllPracticeDetailsReducer
  );

  const tabRoutes = Object.values(PracticeSettingsRoutes);

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
      <Grid
        display={"flex"}
        flexDirection={"row"}
        gap={1}
        alignItems={"center"}
        ml={1}
        mb={1}
      >
        <Grid sx={{ cursor: "pointer" }}>
          <WestOutlinedIcon onClick={() => navigate("/admin/settings-tabs")} />
        </Grid>
        <Grid>
          {" "}
          <Typography variant="titleMediumProfileBold">
            {SettingsFormConstants.PRACTICE_SETTINGS}
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
        <Grid mr={1}>
          {value === 0 && (
            <Grid>
              <CustomButton
                variant="editButton"
                label={SettingsFormConstants.EDIT_PROFILE}
                startIcon={<CreateOutlinedIcon />}
                onClick={() => setEditProfileDialog(true)}
              />
            </Grid>
          )}
          {value === 1 && (
            <Grid>
              <CustomButton
                variant="filled"
                label={SettingsFormConstants.ADD_NEW_LOCATION}
                startIcon={<AddIcon />}
                changePadding={true}
                onClick={() => setAddLocationDialog(true)}
              />
            </Grid>
          )}
          {value === 4 && (
            <Grid>
              <CustomButton
                variant="filled"
                label={SettingsFormConstants.ADD_NEW_CONTACT}
                startIcon={<AddIcon />}
                changePadding={true}
                onClick={() => setAddContactDialog(true)}
              />
            </Grid>
          )}
        </Grid>
      </Box>

      <Box mt={1} p={1}>
        <Outlet />
      </Box>

      <DrawerBS
        title={SettingsFormConstants.EDIT_PROFILE}
        open={editProfileDialog}
        onClose={() => setEditProfileDialog(false)}
        anchor={"right"}
        drawerWidth="50vw"
      >
        <EditProfileDialog
          handleClose={() => setEditProfileDialog(false)}
          profileData={profileData}
        />
      </DrawerBS>
      <DrawerBS
        title={SettingsFormConstants.ADD_NEW_LOCATION}
        open={addLocationDialog}
        onClose={() => setAddLocationDialog(false)}
        anchor={"right"}
        drawerWidth="50vw"
      >
        <AddLocationDialog handleClose={() => setAddLocationDialog(false)} />
      </DrawerBS>
      <DrawerBS
        title={SettingsFormConstants.ADD_NEW_CONTACT}
        open={addContactDialog}
        onClose={() => setAddContactDialog(false)}
        anchor={"right"}
        drawerWidth="50vw"
      >
        <AddContactsDialog handleClose={() => setAddContactDialog(false)} />
      </DrawerBS>
    </Box>
  );
}
