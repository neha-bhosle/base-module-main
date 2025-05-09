import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SettingsFormConstants } from "../../../../constants/formConst";
import DemographicTab from "./demographic-tab";

export const tabStyles = {
  "& .MuiTabs-indicator": {
    backgroundColor: "#145DA0",
  },
  "& .MuiTab-root": {
    textTransform: "capitalize",
  },
};



const AddPatients = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/admin/patients");
  };

  return (
    <Grid
      bgcolor={"#FFFFFF"}
      borderRadius={2}
      height={"90vh"}
      mb={1}
      sx={{
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#D2D2D2",
          borderRadius: "3px",
        },
      }}
    >
      <Grid
        display={"flex"}
        flexDirection={"row"}
        borderBottom={"1px solid #E0E0E0"}
      >
        <Grid display={"flex"} flexDirection={"column"} mt={0.5} ml={2}>
          <Grid display={"flex"} gap={2} flexDirection={"row"}>
            <Grid>
              {" "}
              <WestOutlinedIcon
                onClick={handleBackClick}
                sx={{ cursor: "pointer" }}
              />
            </Grid>
            <Grid>
              <Typography variant="bodySemiBold2">
                {SettingsFormConstants.ADD_NEW_CLIENT}
              </Typography>
            </Grid>
          </Grid>
          <Grid mt={1}>
            <DemographicTab />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddPatients;
