import { loginConstants } from "src/constants/common-component";
import * as yup from "yup";

export const EnterOtpSchema = yup.object().shape({
  email: yup
    .string()
    .required("Enter Email")
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: "Please Enter a valid Email",
    })
    .required(loginConstants.ENTER_VALID)
    .max(255, "Email should be at most 255 characters"),
});

export const SetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please enter your new password")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export const LoginpageSchema = yup.object().shape({
  username: yup
    .string()
    .required("Enter Email")
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: "Please Enter a valid Email",
    })
    .required("Please enter a valid Email")
    .max(255, "Email should be at most 255 characters"),
  password: yup.string().required("Enter Password"),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required("Enter Email")
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: "Please Enter a valid Email",
    })
    .required("Please enter a valid Email")
    .max(255, "Email should be at most 255 characters"),
});
