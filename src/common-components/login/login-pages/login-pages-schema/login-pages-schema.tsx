import * as yup from "yup";
import { ValidationMessages } from "../../../../constants/formConst";

export const EnterOtpSchema = yup.object().shape({
  otp: yup
    .string()
    .required(ValidationMessages.OtpRequired)
    .length(6, ValidationMessages.OtpLength),
});

export const SetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required(ValidationMessages.NewPasswordRequired)
    .min(6, ValidationMessages.PasswordMinLength),
  confirmPassword: yup
    .string()
    .required(ValidationMessages.ConfirmPasswordRequired)
    .oneOf([yup.ref("newPassword")], ValidationMessages.PasswordsMustMatch),
});

export const LoginpageSchema = yup.object().shape({
  username: yup
    .string()
    .required(ValidationMessages.EmailRequired)
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: ValidationMessages.ValidEmailRequired,
    })
    .required(ValidationMessages.ValidEmailRequired)
    .max(255, ValidationMessages.EmailMaxLength),
  password: yup.string().required(ValidationMessages.PasswordRequired),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .required(ValidationMessages.EmailRequired)
    .transform((value) => value?.toLowerCase())
    .matches(/^\w+([\.-]?\w+)*(\+\w+)?@\w+([\.-]?\w+)*(\.\w{2,})$/, {
      message: ValidationMessages.ValidEmailRequired,
    })
    .required(ValidationMessages.ValidEmailRequired)
    .max(255, ValidationMessages.EmailMaxLength),
});
