// noinspection ES6UnusedImports

import { TypographyVariants, TypographyVariantsOptions } from "@material-ui/core/styles";
import { TypographyPropsVariantOverrides } from "@material-ui/core";

declare module "@material-ui/core/Typography" {
    interface TypographyPropsVariantOverrides {
        h3: false;
        h4: false;
        h5: false;
        h6: false;
        subtitle1: false;
        subtitle2: false;
        body2: false;
        caption: false;
        overline: false;
    }
}