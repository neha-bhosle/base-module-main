import { theme } from "../utils/theme";

export const tabSx = {
  borderColor: "divider",
};

export const tabLabel = {
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "bold",
  textTransform: "capitalize",
  minWidth: "auto",
  padding: "12px 10px",
  fontFamily: "Figtree",
  letterSpacing: "0.25%",
  lineHeight: "150%",
  position: "relative",
  color: "gray",
  "&.Mui-selected": {
    padding: "12px 10px",

    color: theme.palette.primary.main,
    backgroundColor: "#f0f8ff",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "3px",
      backgroundColor: theme.palette.primary.main,
    },
  },
};
