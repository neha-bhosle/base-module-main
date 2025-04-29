import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/common-components/custom-button/custom-button";
import { loginConstants } from "src/constants/common-component";
import * as yup from "yup";
import CustomInput from "../../custom-input/customInput";
import CustomLabel from "../../customLabel/customLabel";
import { SetPasswordSchema } from "./login-pages-schema/login-pages-schema";

const SetPassword = () => {
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(SetPasswordSchema),
  });

  const onSubmit = (data: any) => {
    navigate("../login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} width={"29vw"} ml={5} mb={10}>
        <Grid display={"flex"} mt={5} mb={4}>
          <Grid>
            <Typography variant="titleMediumBold">
              {loginConstants.SET_NEW_PASSWORD}
            </Typography>
          </Grid>
        </Grid>
        <Grid display={"flex"} flexDirection={"column"} width={"29vw"}>
          <Grid mb={3}>
            <CustomLabel
              label={loginConstants.NEW_PASSWORD}
              isRequired={false}
              isAuth={true}
            />
            <Controller
              control={control}
              name="newPassword"
              render={({ field }) => (
                <CustomInput
                  isAuth={true}
                  isPassword={true}
                  placeholder={loginConstants.ENTER_NEW_PASS}
                  {...field}
                  hasError={!!errors.newPassword}
                  errorMessage={errors.newPassword?.message}
                  isNumeric={false}
                />
              )}
            />
          </Grid>
          <Grid>
            <CustomLabel
              label={loginConstants.CONFIRM_PASSWORD}
              isRequired={false}
              isAuth={true}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <CustomInput
                  isAuth={true}
                  isPassword={true}
                  placeholder={loginConstants.CONFIRM_PASSWORD}
                  {...field}
                  hasError={!!errors.confirmPassword}
                  errorMessage={errors.confirmPassword?.message}
                  isNumeric={false}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid xs={12} mt={4.5}>
          <CustomButton
            label={loginConstants.CONFIRM_LOGIN}
            variant="filled"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SetPassword;
