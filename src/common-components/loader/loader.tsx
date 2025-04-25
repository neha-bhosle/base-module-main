import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { loaderContainer, circularProgress, circularProgress1 } from "./widgets/loaderStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function Loader() {
  const { showLoader } = useSelector((state: RootState) => state.loaderReducer);

  return showLoader ? (
    <Grid sx={loaderContainer}>
      <CircularProgress sx={circularProgress} />
      <CircularProgress size={53} sx={circularProgress1} />
    </Grid>
  ) : null;
}

export default Loader;
