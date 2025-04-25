import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={5}>
      <Typography variant="h3">Page not found!!</Typography>
      <Button size="large" variant="outlined" onClick={goBackHandler}>
        Go back
      </Button>
    </Grid>
  );
};

export default NotFound;
