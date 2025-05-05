import { theme } from "../utils/theme";

export const tabSx = {
  borderColor: "divider",
  minHeight: "40px",
  backgroundColor: "#F0F0F0",
  borderRadius: "8px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    height: "100%",
    padding: "4px",
  },
  padding: 0,
  "& .MuiTab-root": {
    margin: 0,
    minHeight: "40px",
  },
};

export const tabLabel = {
  color: theme.palette.text.secondary,
  fontSize: "14px",
  fontWeight: "500",
  textTransform: "none",
  minWidth: "auto",
  padding: "8 24px",
  margin: "0 4px",
  height: "32px",
  fontFamily: "Figtree",
  letterSpacing: "0.01em",
  lineHeight: "1.5",
  "&.Mui-selected": {
    color: theme.palette.primary.main,
    fontWeight: "500",
    backgroundColor: "#FFFFFF",
    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
    position: "relative",
    zIndex: 1,
    borderRadius: "8px",
  },
};
