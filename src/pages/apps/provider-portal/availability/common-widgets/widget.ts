export const commonStyles = {
  mainContainer: {
    backgroundColor: "#FFFFFF",
    padding: 1,
    justifyContent: "space-between",
    gap: "1rem",
  },
  fontBold: {
    fontWeight: "bold",
  },
};

export const toggleButtonStyles = {
  height: "31px",
  gap: "10px ",
  "& .MuiToggleButton-root": {
    height: "31px",
    marginRight: "1px",
    border: "1px solid #D2D2D2",
    borderRadius: "6px !important",
    "&:hover": {
      backgroundColor: "#D5EDF6 !important",
      border: "1px solid #145DA0 !important",
      color: "#145DA0 !important",
    },
  },
  "& .Mui-selected": {
    backgroundColor: "#D5EDF6 !important",
    border: "1px solid #145DA0 !important",
    color: "#145DA0 !important",
  },
};
