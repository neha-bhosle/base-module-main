import * as yup from "yup";

export const FeeScheduleSchema = yup.object().shape({
  procedureCode: yup.string().required("Procedure Code is required"),
  rate: yup
    .string()
    .required("Rate is required")
    .matches(/^\$?\d+(\.\d{0,2})?$/, "Invalid rate format"),
  codeType: yup.string().required("Code Type is required"),
});
