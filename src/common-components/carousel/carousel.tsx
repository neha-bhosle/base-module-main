import { Divider, Grid, Typography } from "@mui/material";
import LocationIcon from "src/assets/Projectsvgs/apartmenticon";
import Callicon from "src/assets/Projectsvgs/callicon";
import { loginConstants } from "src/constants/common-component";

function Carousel() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "#0068FF",
        }}
      >
        <Grid mt={15}>
          <Typography variant="h2SemiBold" color={"#FFFFFF"} ml={22}>
            {loginConstants.PRACTICEEASILY}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50vh",
          pointerEvents: "none",
        }}
      >
        <Grid
          mt={"40%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Grid mb={1.5}>
            <Typography variant="titleSmallMediumBold" color={"#FFFFFF"}>
              {loginConstants.CONTACT_INFO}
            </Typography>
          </Grid>
          <Divider
            sx={{
              width: "60%",
              backgroundColor: "#FFFFFF",
              opacity: 0.5,
              my: 1,
              mb: 2,
              fontWeight: 500,
            }}
          />
          <Grid display={"flex"} flexDirection={"row"} gap={2} mb={2} mt={1}>
            <Grid>
              <LocationIcon />
            </Grid>
            <Grid>
              <Typography variant="titleSmallRegularBolder" color={"#FFFFFF"}>
                {loginConstants.ADDRESS_LINE_LOGIN_SCREEN}
              </Typography>
            </Grid>
          </Grid>
          <Grid display={"flex"} flexDirection={"row"} gap={2}>
            <Grid>
              <Callicon />
            </Grid>
            <Grid>
              <Typography
                variant="titleSmallRegular"
                color={"#FFFFFF"}
                fontWeight={"500"}
              >
                {loginConstants.CONTACT_LOGIN_SCREEN}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Carousel;
