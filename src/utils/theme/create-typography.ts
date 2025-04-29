import type { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionText: true;
    tableFont: true;
    navigationBarFont: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  inputTitle: React.CSSProperties;
}

export const createTypography = (): ExtendedTypographyOptions => {
  return {
    fontFamily: '"Figtree"',
    caption: {
      fontFamily: '"Figtree"',
      fontSize: "3.5rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0%",
    },
    h1: {
      fontFamily: '"Figtree"',
      fontSize: "3rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0%",
    },
    h2: {
      fontFamily: '"Figtree"',
      fontSize: "2.5rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0.5%",
    },
    h3: {
      fontFamily: '"Figtree"',
      fontSize: "2rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0.25%",
    },
    subtitle1: {
      fontFamily: '"Figtree"',
      fontSize: "2rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0%",
    },
    inputTitle: {
      fontFamily: '"Figtree"',
      fontSize: "1rem ",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "0%",
    },
    body1: {
      fontFamily: '"Figtree"',
      fontSize: "1.5rem ",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "1%",
    },
    body2: {
      fontFamily: '"Figtree"',
      fontSize: "1.125rem ",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.8%",
    },
    h4: {
      fontFamily: '"Figtree"',
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.5%",
    },
    h5: {
      fontFamily: '"Figtree"',
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.25%",
    },
    h6: {
      fontFamily: '"Figtree"',
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.4%",
    },
    subtitle2: {
      fontFamily: '"Figtree"',
      fontSize: "0.625rem",
      fontWeight: 400,
      lineHeight: "150%",
      letterSpacing: "0.2%",
    },
    button: {
      fontFamily: '"Figtree"',
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: "120%",
      letterSpacing: "0.50%",
    },
    overline: {
      fontFamily: '"Figtree"',
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "120%",
      letterSpacing: "0.25%",
    },
  };
};
