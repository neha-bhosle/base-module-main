import React from "react";
import { Box } from "@mui/material";
import { mainLayoutStyles } from "./widgets/mainLayoutStyles";

const MainLayout = (props) => {
  return (
    <Box sx={mainLayoutStyles}>
      <Box padding={"16px 24px"}>{props.children}</Box>
    </Box>
  );
};

export default MainLayout;
