import { makeStyles } from "@mui/styles";
import { theme } from "../../../utils/theme";

export const customInputStyles = makeStyles({
  textFieldRoot: {
    borderRadius: "5px",
    border: `1px solid ${theme.palette.grey[400]}`,
    height: "40px",
    padding: "10px 10px",
  },
  textFieldRootAuth: {
    borderRadius: "5px",
    border: `1px solid ${theme.palette.grey[400]}`,
    height: "50px",
    padding: "10px 10px",
  },
  textFieldInput: {
    fontFamily: "Figtree",
    fontSize: "12px",
    fontStyle: "normal",
    lineHeight: "150%",
    letterSpacing: "0.048px",
    borderRadius: "8px !important",
  },
  textFieldInputAuth: {
    fontFamily: "Figtree",
    fontSize: "14px",
    fontStyle: "normal",
    lineHeight: "150%",
    letterSpacing: "0.048px",
    borderRadius: "8px !important",
  },
  textFieldActive: {
    borderRadius: "8px !important",
    border: `1px solid ${theme.palette.grey[800]}`,
  },
  textFieldError: {
    border: `1px solid #d32f2f`,
  },
});

export const errorStyle = {
  color: "#d32f2f",
  marginRight: "14px",
  marginBottom: "0px",
  fontFamily: "Figtree",
};

export const placeHolderStyle = {
  color: "var(--Grey-06, #8F8F8F)",
  fontFamily: "Figtree",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "120%",
  letterSpacing: "0.024px",
  opacity: "100%",
};

export const inputStyle = {
  color: "black",
  fontFamily: "Figtree",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "120%",
  letterSpacing: "0.024px",
};
