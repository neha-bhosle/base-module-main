import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { circularProgress, circularProgress1, loaderContainer } from "./widgets/loaderStyles";

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
