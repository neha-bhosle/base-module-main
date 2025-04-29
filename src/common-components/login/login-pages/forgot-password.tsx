import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/common-components/custom-button/custom-button";
import { loginConstants } from "src/constants/common-component";
import CustomInput from "../../custom-input/customInput";
import CustomLabel from "../../customLabel/customLabel";
import { ForgotPasswordSchema } from "./login-pages-schema/login-pages-schema";

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    trigger,
    clearErrors,
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("../enter-opt");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setValue("email", value);

    trigger("email");
    if (value) {
      clearErrors("email");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        item
        xs={12}
        justifyContent={"center"}
        mb={12}
        width={"29vw"}
        ml={9}
      >
        <Grid
          display={"flex"}
          flexDirection={"column"}
          mb={4}
          width={"29vw"}
        >
          <Grid mb={1}>
            <Typography variant="titleMediumBold">
              {loginConstants.FORGOT_PASSWORD}
            </Typography>
          </Grid>
          <Grid>
            <Typography
              variant="titleSmallRegular"
              color={"#74797B"}
            >
              {loginConstants.WELCOME_BACK}
            </Typography>
          </Grid>
        </Grid>
        <Grid>
          <CustomLabel
            label={loginConstants.EMAIL_ID_OR_PHONE}
            isRequired={false}
            isAuth={true}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <CustomInput
                isAuth={true}
                placeholder={loginConstants.ENTER_EMAIL_OR_PHONE}
                {...field}
                hasError={!!errors.email}
                errorMessage={errors.email?.message}
                isNumeric={false}
                onChange={handleEmailChange}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} mt={5}>
          <CustomButton
            label={loginConstants.SEND_VERIFICATION}
            variant="filled"
            fullWidth
            type="submit"
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ForgotPassword;
