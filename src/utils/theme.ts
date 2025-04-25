import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // title1: true;
    // title2: true;
    // title3: true;
    // lgBody1: true;
    // lgBody2: true;
    // body3: true;
    // body4: true;
    // body5: true;
    // body6: true;
    // link: true;
    // label: true;
    bodyRegular1: true;
    bodyRegular2: true;
    bodyRegular3: true;
    bodyRegular4: true;
    bodyRegular5: true;
    bodyRegular6: true;
    bodyMedium1: true;
    bodyMedium2: true;
    bodyMedium3: true;
    bodyMedium4: true;
    bodyMedium5: true;
    bodyMedium6: true;
    bodySemiBold1: true;
    bodySemiBold2: true;
    bodySemiBold3: true;
    bodySemiBold4: true;
    bodySemiBold5: true;
    bodySemiBold6: true;
    titleMedium: true;
    titleSemiBold: true;
    h1Medium: true;
    h1SemiBold: true;
    h2Medium: true;
    h2SemiBold: true;
    h3Medium: true;
    h3SemiBold: true;
    subtitleMedium: true;
    subtitleSemiBold: true;
    inputTitleMedium: true;
    inputTitleSemiBold: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  bodyRegular1: React.CSSProperties;
  bodyRegular2: React.CSSProperties;
  bodyRegular3: React.CSSProperties;
  bodyRegular4: React.CSSProperties;
  bodyRegular5: React.CSSProperties;
  bodyRegular6: React.CSSProperties;
  bodyMedium1: React.CSSProperties;
  bodyMedium2: React.CSSProperties;
  bodyMedium3: React.CSSProperties;
  bodyMedium4: React.CSSProperties;
  bodyMedium5: React.CSSProperties;
  bodyMedium6: React.CSSProperties;
  bodySemiBold1: React.CSSProperties;
  bodySemiBold2: React.CSSProperties;
  bodySemiBold3: React.CSSProperties;
  bodySemiBold4: React.CSSProperties;
  bodySemiBold5: React.CSSProperties;
  bodySemiBold6: React.CSSProperties;
  titleMedium: React.CSSProperties;
  titleSemiBold: React.CSSProperties;
  h1Medium: React.CSSProperties;
  h1SemiBold: React.CSSProperties;
  h2Medium: React.CSSProperties;
  h2SemiBold: React.CSSProperties;
  h3Medium: React.CSSProperties;
  h3SemiBold: React.CSSProperties;
  subtitleMedium: React.CSSProperties;
  subtitleSemiBold: React.CSSProperties;
  inputTitleMedium: React.CSSProperties;
  inputTitleSemiBold: React.CSSProperties;
}

// Typescript module augmentation
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    // xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    lg1: true;
    xl: true;
    xl1: true;
    xxl: true;
  }
}

const palette = {
  primary: {
    main: "#35599D",
    light: "#486CB1"
  },
  secondary: {
    main: "#fff"
  },
  background: {
    default: "#DDDDDD"
  },
  common: { white: "#FFF" }
};

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (portrait phones)
      sm: 600, // Small devices (landscape phones)
      md: 960, // Medium devices (tablets)
      lg: 1280, // Large devices (desktops)
      lg1: 1366, // Large devices (desktops)
      xl: 1440, // Extra large devices (large desktops)
      xl1: 1536, // Large devices (desktops)
      xxl: 1920 // Extra extra large devices (large desktops)
    }
  },
  palette: {
    primary: {
      main: palette.primary.main,
      light: palette.primary.light
    },
    secondary: {
      main: palette.secondary.main
    },
    background: {
      default: palette.background.default
    }
  },
  typography: {
    fontFamily: "",
    bodyRegular1: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "36px",
      letterSpacing: "0.01em",
      textAlign: "left"
    },
    bodyRegular2: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "27px",
      letterSpacing: "0.008em",
      textAlign: "left"
    },
    bodyRegular3: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "26px",
      letterSpacing: "0.005em",
      textAlign: "left"
    },
    bodyRegular4: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
      letterSpacing: "0.0025em",
      textAlign: "left"
    },
    bodyRegular5: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "18px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    bodyRegular6: {
      fontFamily: "Inter",
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "15px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    bodyMedium1: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "36px",
      letterSpacing: "0.01em",
      textAlign: "left"
    },
    bodyMedium2: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "27px",
      letterSpacing: "0.008em",
      textAlign: "left"
    },
    bodyMedium3: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.005em",
      textAlign: "left"
    },
    bodyMedium4: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "21px",
      letterSpacing: "0.0025em",
      textAlign: "left"
    },
    bodyMedium5: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    bodyMedium6: {
      fontFamily: "Inter",
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "15px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    bodySemiBold1: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "36px",
      letterSpacing: "0.01em",
      textAlign: "left"
    },
    bodySemiBold2: {
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "27px",
      letterSpacing: "0.008em",
      textAlign: "left"
    },
    bodySemiBold3: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      letterSpacing: "0.005em",
      textAlign: "left"
    },
    bodySemiBold4: {
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "21px",
      letterSpacing: "0.0025em",
      textAlign: "left"
    },
    bodySemiBold5: {
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "18px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    bodySemiBold6: {
      fontFamily: "Inter",
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "15px",
      letterSpacing: "0.004em",
      textAlign: "left"
    },
    titleMedium: {
      fontFamily: "Inter",
      fontSize: "56px",
      fontWeight: 500,
      lineHeight: "67px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    titleSemiBold: {
      fontFamily: "Inter",
      fontSize: "56px",
      fontWeight: 600,
      lineHeight: "67px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    h1Medium: {
      fontFamily: "Inter",
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "58px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    h1SemiBold: {
      fontFamily: "Inter",
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "58px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    h2Medium: {
      fontFamily: "Inter",
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "48px",
      letterSpacing: "0.005em",
      textAlign: "left"
    },
    h2SemiBold: {
      fontFamily: "Inter",
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "48px",
      letterSpacing: "0.005em",
      textAlign: "left"
    },
    h3Medium: {
      fontFamily: "Inter",
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "38px",
      letterSpacing: "0.0025em",
      textAlign: "left"
    },
    h3SemiBold: {
      fontFamily: "Inter",
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "38px",
      letterSpacing: "0.0025em",
      textAlign: "left"
    },
    subtitleMedium: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "29px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    subtitleSemiBold: {
      fontFamily: "Inter",
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "29px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    inputTitleMedium: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left"
    },
    inputTitleSemiBold: {
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "19px",
      letterSpacing: "0em",
      textAlign: "left"
    }
  } as ExtendedTypographyOptions,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "black"
          // "&.MuiTypography-body1": {
          // }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.MuiButton-containedPrimary": {
            boxShadow: "none",
            "&:hover": {
              backgroundColor: palette.primary.light
            }
          }
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          "&.Mui-selected": {
            backgroundColor: palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: palette.primary.light
            }
          }
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiMenu-paper": {
            boxShadow: "none",
            border: ".8px solid lightgrey"
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fontSize: "14px"
          }
        }
      }
    }
  }
});
