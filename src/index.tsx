import App from "App";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { getCurrentThemeOptions } from "theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={createTheme(getCurrentThemeOptions())}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
