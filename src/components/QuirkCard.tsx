import Quirk, { ModList, QuirkMod } from "quirks/Quirk";
import { useState } from "react";
import { Card, CardActions, CardContent, Chip, createTheme, Grid, Stack, Typography } from "@mui/material";
import QuirkModListPopover from "components/QuirkModListPopover";
import { ThemeProvider } from "@mui/material/styles";
import { getCurrentThemeOptions } from "theme";

type QuirkCardProps = {
    quirk: Quirk;
    inputText: string;
};

function getModDefaultValues(mods: QuirkMod[]) {
    const modList: ModList = {};

    for (const mod of mods) {
        modList[mod.id] = mod.defaultValue;
    }

    return modList;
}

export default function QuirkCard(props: QuirkCardProps): JSX.Element {
    const [mods, setMods] = useState<ModList>(getModDefaultValues(props.quirk.mods));

    const themeOptions = getCurrentThemeOptions();
    const quirkTheme = createTheme({
        ...themeOptions,
        palette: {
            ...themeOptions.palette,
            primary: { main: props.quirk.color }
        }
    });

    return (
        <ThemeProvider theme={quirkTheme}>
            <Grid item
                  xs={12} sm={6} md={4}
            >
                <Card sx={{ height: "100%" }}>
                    <CardContent>
                        <Stack direction={"row"} spacing={2}>
                            <Typography color={"primary"} variant={"h2"}>{props.quirk.name}</Typography>
                            <Chip label={props.quirk.tag} />
                        </Stack>
                        <Typography>{props.quirk.parseTextToQuirk(props.inputText, mods)}</Typography>
                    </CardContent>
                    <CardActions>
                        {props.quirk.mods.length > 0 && <QuirkModListPopover quirk={props.quirk} mods={mods} setMods={setMods} />}
                    </CardActions>
                </Card>
            </Grid>
        </ThemeProvider>
    );
}