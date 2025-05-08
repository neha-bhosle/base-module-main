import { Grid } from "@mui/material";
import PracticeSettingsPage from "./practice-settings-page";
import SettingsPage from "./settings-page";

const AllSettingsPage = () => {
  return (
    <Grid  spacing={2} gap={2} display={"flex"} flexDirection={"row"}>
      <Grid item xs={12}>
        <PracticeSettingsPage />
      </Grid>
      <Grid item xs={12}>
        <SettingsPage />
      </Grid>
    </Grid>
  );
};

export default AllSettingsPage;
