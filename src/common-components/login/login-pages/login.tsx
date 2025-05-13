/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import { Grid, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../common-components/custom-button/custom-button";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginConstants } from "../../../constants/common-component";
import { login } from "../../../redux/auth/loginReducer";
import { theme } from "../../../utils/theme";
import CustomInput from "../../custom-input/customInput";
import CustomLabel from "../../customLabel/customLabel";
import { forgotPassword } from "../widgets/loginStyles";
import { LoginpageSchema } from "./login-pages-schema/login-pages-schema";
import { PatientTemplateActions } from "../../../constants/formConst";
import { snackbarAction } from "../../../redux/auth/snackbarReducer";
import { AlertSeverity } from "../../../common-components/snackbar-alert/snackbar-alert";
import { AppDispatch, RootState } from "../../../redux/store";

interface LoginForm {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLogin = useSelector((state: any) => state.loginReducer);
  // const { LOGIN } = apiPath;

  const [loginData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const {
    // data: editPracticeResponse,
    status: loginStatus,
    error: loginError,
  }: any = useSelector((state: RootState) => state.loginReducer);

  console.log("loginStatus", loginError);

  useEffect(() => {
    if (!isLogin) return;
    if (isLogin?.data?.access_token && loginStatus === "succeeded") {
      navigate("/admin/settings-tabs/profile-tabs/profile");
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: AlertSeverity.SUCCESS,
          message: "Login successful",
        })
      );
    } else if (loginStatus === "failed") {
      dispatch(
        snackbarAction.showSnackbarAction({
          severity: AlertSeverity.ERROR,
          message: loginError?.message || loginError,
        })
      );
    }
  }, [isLogin, loginStatus]);

  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm<LoginForm>({
    defaultValues: loginData,
    resolver: yupResolver(LoginpageSchema),
  });

  const onSubmit = (values: LoginForm) => {
    dispatch(login({ email: values.username, password: values.password }));
  };

  return (
    <Box maxWidth="500px" width="100%" margin="0 auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container flexDirection="column" spacing={3} padding={2}>
          <Grid item>
            <Grid container flexDirection="column">
              <Typography variant="titleMediumBold">
                {loginConstants.LOG_IN_TO_ACC}
              </Typography>
              <Grid mt={1}>
                <Typography variant="titleSmallRegular" color={"#74797B"}>
                  {loginConstants.WELCOME_BACK}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
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
                    const value = e.target.value.trim();
                    field.onChange(value);
                    const emailRegex =
                      /^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/;
                    if (emailRegex.test(value.toLowerCase())) {
                      clearErrors("username");
                    }
                  }}
                />
              )}
            />
          </Grid>

          <Grid item>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value;
                    field.onChange(value);
                    // Clear password error if it meets criteria
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasLowerCase = /[a-z]/.test(value);
                    const hasNumber = /\d/.test(value);
                    const hasSpecialChar = /[@$!%*?&]/.test(value);
                    const isLongEnough = value.length >= 8;

                    if (
                      hasUpperCase &&
                      hasLowerCase &&
                      hasNumber &&
                      hasSpecialChar &&
                      isLongEnough
                    ) {
                      clearErrors("password");
                    }
                  }}
                />
              )}
            />
            <Grid container justifyContent="flex-end" marginTop={2}>
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

          <Grid item marginTop={2}>
            <CustomButton
              label={loginConstants.CONFIRM_LOGIN}
              variant="filled"
              fullWidth
              type="submit"
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Login;
