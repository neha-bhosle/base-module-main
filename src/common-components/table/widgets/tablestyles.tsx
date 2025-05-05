export const tableHeadStyles = {
  color: "var(--Grey-08, #565656)",
  fontFamily: "Figtree",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "150%",
  letterSpacing: "0.035px",
};

export const tableBodyStyles = {
  color: "var(--Grey-09, #393939)",
  fontFamily: "Figtree",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "0.035px",
  padding: "4px 18px",
};

export const paginationButton = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",

  "& .Mui-selected": {
    color: "#145DA0 !important",  
    background: "#F6FAFF !important",
  },
  "& .Mui-selected:hover": {
    color: "#145DA0",
    background: "#F6FAFF",
  },
  "& button": {
    textTransform: "inherit",
    borderRadius: "var(--1, 8px)",
    border: "1px solid var(--Grey-02, #F4F4F4)",
    // background: "var(--Solid-White, #FFF)",
    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
    color: "#595F63",
  },
  "& li:first-of-type": {
    color: "#565656",
  },
  "& li:last-of-type": {
    color: "#565656",
  },
};

export const backArrow = {
  color: "#565656",
  mr: 1,
};

export const fordwardArrow = {
  color: "#565656",
  ml: 1,
};

export const tableBorder = {
  border: "1px solid var(--Grey-03, #E9E9E9)",
};
