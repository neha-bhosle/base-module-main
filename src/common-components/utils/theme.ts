import { alpha, createTheme } from "@mui/material";
// eslint-disable-next-line import/named
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title: true;
    heading1: true;
    heading2: true;
    heading3: true;
    subcaption1: true;
    subcaption2: true;
    inputTitle: true;
    lgBody1: true;
    lgBody2: true;
    body3: true;
    body4: true;
    body5: true;
    body6: true;
    buttonLinkAndField1: true;
    buttonLinkAndField2: true;
    buttonLinkAndField3: true;
    buttonLinkAndField4: true;
  }
}
interface ExtendedTypographyOptions extends TypographyOptions {
  title: React.CSSProperties;
  heading1: React.CSSProperties;
  heading2: React.CSSProperties;
  heading3: React.CSSProperties;
  subcaption1: React.CSSProperties;
  subcaption2: React.CSSProperties;
  inputTitle: React.CSSProperties;
  lgBody1: React.CSSProperties;
  lgBody2: React.CSSProperties;
  body3: React.CSSProperties;
  body4: React.CSSProperties;
  body5: React.CSSProperties;
  body6: React.CSSProperties;
  buttonLinkAndField1: React.CSSProperties;
  buttonLinkAndField2: React.CSSProperties;
  buttonLinkAndField3: React.CSSProperties;
  buttonLinkAndField4: React.CSSProperties;
}

// Typescript module augmentation
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    xs1: true;
    sm: true;
    sm1: true;
    md: true;
    md1: true;
    lg: true;
    lg1: true;
    xl: true;
    xl1: true;
    xl2: true;
    xxl: true;
  }
}

const palette = {
  primary: {
    main: "#1A4D66",
    light: "#2E8BB7", //hover shade
  },
  secondary: {
    main: "#03A1E9",
    light: "#1b5984",
  },
  background: {
    default: "#F3F4F4",
  },
  common: {
    white: "#FFFFFF",
    black: "000000",
  },
  status: {
    accepted: "#28C43B",
    rejected: "#FF7474",
    denied: "#FFAB04",
  },
};
export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 360,
      xs: 375,
      xs1: 390,
      sm: 744,
      sm1: 834,
      md: 1024,
      md1: 1133,
      lg: 1194,
      lg1: 1280,
      xl: 1366,
      xl1: 1440,
      xl2: 1650,
      xxl: 1920,
    },
  },
  palette: {
    primary: {
      main: palette.primary.main,
      light: palette.primary.light,
    },
    secondary: {
      main: palette.secondary.main,
      light: palette.secondary.light,
    },
    background: {
      default: palette.background.default,
    },
  },
  typography: {
    fontFamily: "Figtree",
    title: {
      fontFamily: "Figtree",
      fontSize: "57px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    heading1: {
      fontFamily: "Figtree",
      fontSize: "48px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    heading2: {
      fontFamily: "Figtree",
      fontSize: "40px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    heading3: {
      fontFamily: "Figtree",
      fontSize: "32px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    subcaption1: {
      fontFamily: "Figtree",
      fontSize: "24px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    subcaption2: {
      fontFamily: "Figtree",
      fontSize: "20px",
      letterSpacing: "0%",
      lineHeight: "120%",
    },
    inputTitle: {
      fontFamily: "Figtree",
      fontSize: "16px",
      letterSpacing: "0%",
      lineHeight: "120%",
      fontWeight: 600,
    },
    lgBody1: {
      fontFamily: "Figtree",
      fontSize: "24px",
      letterSpacing: "1%",
      lineHeight: "150%",
    },
    lgBody2: {
      fontFamily: "Figtree",
      fontSize: "18px",
      letterSpacing: "0.8%",
      lineHeight: "150%",
    },
    body3: {
      fontFamily: "Figtree",
      fontSize: "16px",
      letterSpacing: "0.5%",
      lineHeight: "150%",
    },
    body4: {
      fontFamily: "Figtree",
      fontSize: "14px",
      letterSpacing: "0.25%",
      lineHeight: "150%",
    },
    body5: {
      fontFamily: "Figtree",
      fontSize: "12px",
      letterSpacing: "0.4%",
      lineHeight: "150%",
    },
    body6: {
      fontFamily: "Figtree",
      fontSize: "10px",
      letterSpacing: "0.2%",
      lineHeight: "150%",
    },
    buttonLinkAndField1: {
      fontFamily: "Figtree",
      fontSize: "18px",
      letterSpacing: "0.5%",
      lineHeight: "100%",
    },
    buttonLinkAndField2: {
      fontFamily: "Figtree",
      fontSize: "16px",
      letterSpacing: "0.25%",
      lineHeight: "100%",
    },
    buttonLinkAndField3: {
      fontFamily: "Figtree",
      fontSize: "14px",
      letterSpacing: "0.4%",
      lineHeight: "100%",
    },
    buttonLinkAndField4: {
      fontFamily: "Figtree",
      fontSize: "14px",
      letterSpacing: "0.2%",
      lineHeight: "100%",
      fontWeight: 600,
    },
  } as ExtendedTypographyOptions,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "black"
          // "&.MuiTypography-body1": {
          // }
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.MuiButton-containedPrimary": {
            borderRadius: "5px",
            boxShadow: "none",
            color: palette.common.white,
            padding: "7px 20px 7px 20px",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: alpha(palette.primary.main, 0.7),
            },
          },
          "&.MuiButton-outlined": {
            borderRadius: "5px",
            padding: "3px 20px 3px 20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: alpha(palette.primary.light, 0.3),
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          "&.Mui-selected": {
            backgroundColor: palette.secondary.light,
            color: "white",
            "&:hover": {
              backgroundColor: palette.primary.light,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiMenu-paper": {
            boxShadow: "none",
            border: ".8px solid lightgrey",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          border: "none",
          // "&.MuiAppBar-colorDefault": {
          //   backgroundColor: alpha("#486CB1", 0.001)
          // }
        },
      },
    },
  },
});
