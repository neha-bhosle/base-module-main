
export const GetNavbarStyles = () => {

  return {
    container: {
      background: "#FFFFFF",
      padding: "0.5px 24px",
      alignItems: "center",
      height: "50px",
    },
    typo: {
      padding: "9px 15px",
      color: "var(--Solid-White, var(--common-white-main, #21262B))",
      fontFamily: "Figtree",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.035px",
      cursor: "pointer",
      textTransform: "inherit",
      borderRadius: "0",
    },
    redIndicator: {
      background: "#F04438",
      color: "white",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      fontSize: "12px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      position: "absolute",
      top: "-3px",
      right: "-5px",
      padding: "8px",
    },
    iconStyle: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
  };
};
