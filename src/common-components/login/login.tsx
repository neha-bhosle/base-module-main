/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Checkbox, Grid, Typography, useMediaQuery } from "@mui/material";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import logo from "../../assets/images/mainLogoBlack.svg";
import { loginConstants } from "../../constants/common-component";
import { apiStatus } from "../../models/apiStatus";
import { AccessTokenPayload } from "../../models/token-payload";
import { loaderAction } from "../../redux/auth/loaderReducer";
import { MyApiState, login } from "../../redux/auth/loginReducer";
import { snackbarAction } from "../../redux/auth/snackbarReducer";
import { RootState } from "../../redux/store";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  saveToLocalStorage
} from "../../utils/localStorage";
import { AlertSeverity } from "../alert/alert";
import CustomInput from "../custom-input/customInput";
import CustomLabel from "../customLabel/customLabel";
import { forgotPassword, rememberMeStyles, filled } from "./widgets/loginStyles";

function Login() {
  const isMobile = useMediaQuery("(max-width:399px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginData] = useState({
    username: "",
    password: ""
  });
  const { data, status, error }: MyApiState = useSelector((state: RootState) => state.loginReducer);

  useEffect(() => {
    switch (status) {
      case apiStatus.LOADING:
        dispatch(loaderAction.showLoader());
        break;
      case apiStatus.SUCCEEDED: {
        const role = getRoleFromAccessToken(data?.access_token ?? "");
        const roleString = role || "";

        dispatch(loaderAction.hideLoader());

        saveToLocalStorage("role", role);
        break;
      }
      case apiStatus.FAILED:
        dispatch(loaderAction.hideLoader());
        dispatch(
          snackbarAction.showSnackbarAction({
            isSnackbarOpen: true,
            severity: AlertSeverity.ERROR,
            message: error
          })
        );
        break;
      default:
        break;
    }
  }, [status]);

  useEffect(() => {
    const creds = getDataFromLocalStorage("credential");
    if (creds) {
      const creds: typeof loginData = JSON.parse(getDataFromLocalStorage("credential") || "{}");
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
    getValues
  } = useForm({
    defaultValues: loginData,
    resolver: yupResolver(
      yup.object().shape({
        username: yup
          .string()
          .required("Enter Email")
          .transform((value) => value?.toLowerCase())
          .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
            message: "Please Enter a valid Email"
          })
          .required("Please enter a valid Email")
          .max(255, "Email should be at most 255 characters"),
        password: yup.string().required("Enter Password")
      })
    )
  });

  const getRoleFromAccessToken = (accessToken: string): string => {
    const decodedPayload: AccessTokenPayload = jwtDecode(accessToken);
    const roles = decodedPayload.realm_access?.roles || [];
    const ignoreSet = new Set([
      "offline_access",
      "uma_authorization",
      "default-roles-qa",
      "default-roles-development",
      "default-roles-prod"
    ]);
    const filteredRoles = roles.filter((item) => !ignoreSet.has(item));
    const role = filteredRoles[0];
    return role || "";
  };

  const onSubmit = (values: { username: string; password: string }) => {
    dispatch(login(values) as any);
    if (rememberMe) saveToLocalStorage("credential", getValues());
  };

  const handleRememberMe = () => {
    if (!rememberMe) {
      saveToLocalStorage("credential", getValues());
      setRememberMe(!rememberMe);
    } else {
      removeDataFromLocalStorage("credential");
      setRememberMe(!rememberMe);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} justifyContent={"center"}>
        <img src={logo} width={isMobile ? "263px" : "inherit"} />
        <Grid mt={3} item xs={12}>
          <Box>
            <CustomLabel label={loginConstants.EMAIL_ID} isRequired={false} isAuth={true} />
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <CustomInput
                  isAuth={true}
                  placeholder={loginConstants.ENTER_EMAIL}
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
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <CustomLabel label={loginConstants.PASSWORD} isRequired={false} isAuth={true} />
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
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            mt={1.5}
            justifyContent={"space-between"}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Checkbox
                onClick={handleRememberMe}
                checked={rememberMe}
                sx={{
                  padding: "0",
                  "& svg": {
                    fontSize: "18px !important"
                  }
                }}
                size="medium"
              />
              <Typography onClick={handleRememberMe} sx={rememberMeStyles}>
                {loginConstants.REMEMBER_ME}
              </Typography>
            </Box>
            <Box>
              <Typography onClick={() => navigate("../forgot-password")} sx={forgotPassword}>
                {loginConstants.FORGOT_PASSWORD}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Button fullWidth sx={{ ...filled, height: "46px" }} type="submit">
            {loginConstants.SIGN_IN}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
