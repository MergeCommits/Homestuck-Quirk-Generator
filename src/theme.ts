import { ThemeOptions } from "@mui/material/styles";

export function getCurrentThemeOptions(): ThemeOptions {
    return {
        palette: {
            mode: "dark",
            primary: {
                main: "#FFFFFF"
            }
        },

        typography: {
            h1: {
                fontWeight: 400,
                fontSize: "2.125rem",
                lineHeight: 1.235,
                letterSpacing: "0.00735em"
            },
            h2: {
                fontWeight: 400,
                fontSize: "1.5rem",
                lineHeight: 1.334,
                letterSpacing: "0em"
            },
            h3: undefined,
            h4: undefined,
            h5: undefined,
            h6: undefined,
            subtitle1: undefined,
            subtitle2: undefined,
            body2: undefined,
            caption: undefined,
            overline: undefined,
        },

        shape: {
            borderRadius: 2
        }
    };
}