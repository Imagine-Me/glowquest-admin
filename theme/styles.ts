"use client";
import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material/styles";


// Extend the theme interface
declare module '@mui/material/styles' {
  interface Palette {
    yellow: PaletteColor;
  }

  interface PaletteOptions {
    yellow?: PaletteColorOptions;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    yellow: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-imprima)",
    h3: {
      fontSize: "2.5rem",
      fontWeight: "bolder",
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: "bolder",
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: "bolder",
    },
    h6: {
      fontSize: ".9rem",
    },
  },
  palette: {
    primary: {
      main: "#D49BA0", // Soft muted rose
      light: "#E7B9BD", // Lighter version for hover/highlight
      dark: "#B07A7E", // For strong accents
      contrastText: "#fff",
    },
    secondary: {
      main: "#A28C94", // Muted mauve/plum
      light: "#C4B3B9",
      dark: "#806C74",
      contrastText: "#fff",
    },
    background: {
      default: "#FFF9F9", // Almost white with a blush undertone
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2C2C2C", // Deep, soft black for readability
      secondary: "#7A6D72", // Gentle gray for subtext
    },
    success: {
      main: "#8AB17D", // Natural, calm green
      light: "#A5C39A",
      dark: "#6F9560",
      contrastText: "#ffffff",
    },
    error: {
      main: "#D7737A", // Warm blush red
      light: "#E98E93",
      dark: "#BA5A60",
      contrastText: "#ffffff",
    },
    // yellow
    yellow: {
      main: "#F2D16B", // Soft pastel yellow
      light: "#F5E0A1",
      dark: "#D1B04C",
      contrastText: "#000000", // Black for contrast
    },
    warning: {
      main: "#E1B07E", // Soft golden apricot
      light: "#F2C89C",
      dark: "#C99665",
      contrastText: "#000000",
    },
    info: {
      main: "#A2B3C4", // Muted cool blue-gray
      light: "#C2D1DD",
      dark: "#8496A6",
      contrastText: "#000000",
    },
    divider: "#E5D9DC",
  },
});

export default theme;
