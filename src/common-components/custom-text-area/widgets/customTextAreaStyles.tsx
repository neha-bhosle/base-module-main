import { makeStyles } from "@mui/styles";

export const editTextAreaStyle = makeStyles({
  textArea: {
    border: `1px solid #D2D2D2`,
    height: "40px",
    padding: "10px 12px",
    width: "100%",
    color: "black",
    fontFamily: "Figtree",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    letterSpacing: "0.024px",
    borderRadius: "8px !important",
    "&::placeholder": {
      color: "var(--Grey-06, #595F63)",
      fontFamily: "Figtree",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "120%",
      letterSpacing: "0.024px",
    },
    "&::focus": {
      borderRadius: "8px",
      border: `1px solid #D2D2D2`,
      height: "40px",
      padding: "10px 12px",
    },
  },
  errorMessage: {
    border: "1px solid red",
  },
});
