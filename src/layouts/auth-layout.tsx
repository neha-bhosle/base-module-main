import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { loginConstants } from "../constants/common-component";
import logo from "../assets/images/favicon.png";
import Carousel from "../common-components/carousel/carousel";
import { theme } from "../utils/theme";

const AuthLayout = (props: React.PropsWithChildren) => {
  const matchesTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery("(max-width:702px)");

  return (
    <Grid container height={"100vh"} padding={"0"}>
      {!matchesTablet && (
        <Grid item xs={4} height={"100%"}>
          <Carousel />
        </Grid>
      )}
      <Grid item xs={!matchesTablet ? 8 : 12}>
        <Grid
          container
          justifyContent={"center"}
          pr={isMobile ? 0 : 8}
          mt={11}
        >
          <img src={logo} width={isMobile ? "163px" : "160px"} />
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingX: isMobile ? "5%" : "25%",
            height: "65%",
          }}
        >
          {props.children}
        </Box>
        <Grid
          display={"flex"}
          flexDirection={"row"}
          gap={1.5}
          position="absolute"
          bottom={25}
          ml={isMobile ? 3 : 8}
        >
          <Grid>
            <Typography variant="titleSmallMini" color={"#373D41"}>
              {loginConstants.PRACTICE_EASY}
            </Typography>
          </Grid>
          <Grid sx={{ cursor: "pointer" }}>
            <Typography variant="titleSmallMini" color={"#74797B"}>
              {loginConstants.SUPPORT}
            </Typography>
          </Grid>
          <Grid sx={{ cursor: "pointer" }}>
            <Typography variant="titleSmallMini" color={"#74797B"}>
              {loginConstants.PRIVACY}
            </Typography>
          </Grid>
          <Grid sx={{ cursor: "pointer" }}>
            <Typography variant="titleSmallMini" color={"#74797B"}>
              {loginConstants.COOKIE_SETTINGS}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
