import { Box, Grid, useMediaQuery } from "@mui/material";
import { theme } from "../utils/theme";
import Carousel from "../common-components/carousel/carousel";
import React from "react";

const AuthLayout = (props: React.PropsWithChildren) => {
  const matchesTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery("(max-width:702px)");

  return (
    <Grid container height={"100vh"} padding={"0"}>
      {!matchesTablet && (
        <Grid item xs={5.4} height={"99%"}>
          <Carousel />
        </Grid>
      )}
      <Grid item xs={!matchesTablet ? 6.6 : 12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingX: isMobile ? "5%" : "25%",
            height: "100%",
          }}
        >
          {props.children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
