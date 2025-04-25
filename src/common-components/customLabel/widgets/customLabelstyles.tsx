import { makeStyles } from "@mui/styles";

export const customLabelStyles = makeStyles({
  headerLabel: {
    color: "var(--Grey-60, var(--Grey-60, #8F8F8F)) !important",
    fontFamily: "Inter !important",
    fontSize: "12px !important",
    fontStyle: "normal !important",
    fontWeight: 500,
    lineHeight: "120% !important",
    letterSpacing: "0.024px"
  },
  authLabel: {
    color: "var(--Grey-60, var(--Grey-60, #8F8F8F)) !important",
    fontFamily: "Inter !important",
    fontSize: "14px !important",
    fontStyle: "normal !important",
    fontWeight: 500,
    lineHeight: "120% !important",
    letterSpacing: "0.024px"
  },
  required: {
    color: "red",
    marginLeft: "0.2rem"
  }
});
