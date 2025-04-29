/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/common-components/custom-button/custom-button";
import { loginConstants } from "src/constants/common-component";
import { theme } from "src/utils/theme";
import { login } from "../../../redux/auth/loginReducer";
import {
  getDataFromLocalStorage,
  saveToLocalStorage,
} from "../../../utils/localStorage";
import CustomInput from "../../custom-input/customInput";
import CustomLabel from "../../customLabel/customLabel";
import { forgotPassword } from "../widgets/loginStyles";
import { LoginpageSchema } from "./login-pages-schema/login-pages-schema";

function Login() {
  const isMobile = useMediaQuery("(max-width:399px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const creds = getDataFromLocalStorage("credential");
    if (creds) {
      const creds: typeof loginData = JSON.parse(
        getDataFromLocalStorage("credential") || "{}"
      );
      setValue("username", creds?.username);
      setValue("password", creds?.password);
      setRememberMe(true);
    }
  }, []);

  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: loginData,
    resolver: yupResolver(LoginpageSchema),
  });

  const onSubmit = (values: { username: string; password: string }) => {
    dispatch(login(values) as any);

    if (rememberMe) saveToLocalStorage("credential", getValues());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} width={"29vw"} ml={3} mb={3}>
        <Grid
          display={"flex"}
          flexDirection={"column"}
          ml={3}
        >
          <Grid>
            <Typography variant="titleMediumBold">
              {loginConstants.LOG_IN_TO_ACC}
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="titleSmallRegular" color={"#74797B"}>
              {loginConstants.WELCOME_BACK}
            </Typography>
          </Grid>
        </Grid>
        <Grid mt={1} item xs={12} justifyContent={"center"}>
          <Grid>
            <CustomLabel
              label={loginConstants.EMAIL_ID_OR_PHONE}
              isRequired={false}
              isAuth={true}
            />
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <CustomInput
                  isAuth={true}
                  placeholder={loginConstants.ENTER_EMAIL_OR_PHONE}
                  {...field}
                  hasError={!!errors.username}
                  errorMessage={errors.username?.message}
                  isNumeric={false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue("username", e.target.value.trim());
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <CustomLabel
              label={loginConstants.PASSWORD}
              isRequired={false}
              isAuth={true}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <CustomInput
                  isAuth={true}
                  isPassword={true}
                  placeholder={loginConstants.ENTER_PASSWORD}
                  {...field}
                  hasError={!!errors.password}
                  errorMessage={errors.password?.message}
                  isNumeric={false}
                />
              )}
            />
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={2.5}
            justifyContent={"flex-end"}
          >
            <Grid>
              <Typography
                onClick={() => navigate("../forgot-password")}
                sx={forgotPassword}
                color={theme.palette.secondary.main}
                variant="titleSmallRegular"
              >
                {loginConstants.FORGOT_PASSWORD}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={1.5}>
          <CustomButton
            label={loginConstants.CONFIRM_LOGIN}
            variant="filled"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
