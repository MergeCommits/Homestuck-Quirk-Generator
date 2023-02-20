// noinspection JSUnusedGlobalSymbols

import "@mui/material/styles";

declare module "@material-ui/core/Typography" {
    interface TypographyPropsVariantOverrides {
        h3: false;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body2: false;
        caption: false; // StepLabel relies on this, so we only disable the typing here and do not remove it from the theme object.
        overline: false;
    }
}
