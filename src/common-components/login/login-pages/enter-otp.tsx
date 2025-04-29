import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/common-components/custom-button/custom-button";
import { loginConstants } from "src/constants/common-component";
import styled from "styled-components";
import { EnterOtpSchema } from "./login-pages-schema/login-pages-schema";

const OtpInputStyled = styled(MuiOtpInput as any)`
  & .MuiInputBase-root {
    border-radius: 15px;
  }
  & .MuiInputBase-input {
    border-radius: 15px;
    font-size: 20px;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-radius: 15px;
  }
`;

const EnterOtp = () => {
  const [otp, setOtp] = React.useState("");

  const isMobile = useMediaQuery("(max-width:702px)");

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(EnterOtpSchema),
  });

  const handleChange = (newValue: any) => {
    setOtp(newValue);
  };

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        item
        xs={12}
        justifyContent={"center"}
        mb={13}
        width={"28vw"}
        ml={9}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          mb={3}
        >
          <Grid>
            <Typography variant="titleMediumBold">
              {loginConstants.OTP_VERIFICATION}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="titleSmallRegular"
              color={"#74797B"}
            >
              {loginConstants.CHECK_CODE}
            </Typography>
            <Typography variant="titleSmallRegularBolder" color={"#74797B"}>
              {loginConstants.EMAIL_DUMMY}
            </Typography>
          </Grid>
        </Grid>
        <Grid mb={1}>
          <Typography variant="titleSmallMiniBolder">
            {loginConstants.ENTER_CODE}
          </Typography>
        </Grid>
        <Grid width={isMobile ? "65vw" : "25vw"} mb={5}>
          <OtpInputStyled
            value={otp}
            onChange={handleChange}
            length={6}
            gap={1}
            maxWidth={isMobile ? "80vw" : "20vw"}
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <CustomButton
            label={loginConstants.VERIFY_OTP}
            variant="filled"
            fullWidth
            onClick={() => navigate("../set-password")}
          />
        </Grid>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          mb={4}
          mt={1}
        >
          <Grid>
            <Typography variant="titleSmallMedium" color={"#74797B"}>
              {loginConstants.DIDNT_RECIEVER_CODE}
            </Typography>
            <Typography
              variant="titleSmallMedium"
              color={"#0068FF"}
            >
              {loginConstants.RESEND}
            </Typography>
            <Typography
              variant="titleSmallRegularBolder"
              color={"#74797B"}
            >
              {loginConstants.TIME_OTP}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default EnterOtp;
