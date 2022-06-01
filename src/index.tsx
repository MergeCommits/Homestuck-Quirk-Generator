import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, CssBaseline } from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { getCurrentThemeOptions } from "theme";

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={createTheme(getCurrentThemeOptions())}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);