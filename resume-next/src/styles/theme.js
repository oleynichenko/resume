"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "0.75rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "0.5rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1200px",
          padding: "2rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1.5rem",
          marginBottom: "1.5rem",
        },
      },
    },
  },
});

export default theme;
