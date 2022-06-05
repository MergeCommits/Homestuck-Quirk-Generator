import Quirk, { ModList, QuirkMod } from "quirks/Quirk";
import { useMemo, useState } from "react";
import { Box, Card, CardActions, CardContent, Chip, createTheme, IconButton, Stack, Typography } from "@mui/material";
import QuirkModListPopover from "components/QuirkModListPopover";
import { ThemeProvider } from "@mui/material/styles";
import { getCurrentThemeOptions } from "theme";
import { Star } from "@mui/icons-material";

type QuirkCardProps = {
    quirk: Quirk;
    inputText: string;
    starred: boolean;
    toggleStarred: (quirkName: string) => void;
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

    const quirkText = useMemo(() => props.quirk.parseTextToQuirk(props.inputText, mods), [props.quirk, props.inputText, mods]);

    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Stack direction={"row"} spacing={2}>
                    <ThemeProvider theme={quirkTheme}>
                        <Typography color={"primary"} variant={"h2"} whiteSpace={"pre-wrap"}>{props.quirk.name}</Typography>
                    </ThemeProvider>
                    <Box flexGrow={1}>
                        <Chip label={props.quirk.tag} />
                    </Box>
                    <IconButton color={"primary"} aria-label={"star this quirk"} onClick={() => props.toggleStarred(props.quirk.name)}>
                        {props.starred ? <Star /> : <Star color={"disabled"} />}
                    </IconButton>
                </Stack>
                <Typography>{quirkText}</Typography>
            </CardContent>
            <CardActions>
                <ThemeProvider theme={quirkTheme}>
                    {props.quirk.mods.length > 0 && <QuirkModListPopover quirk={props.quirk} mods={mods} setMods={setMods} />}
                </ThemeProvider>
            </CardActions>
        </Card>
    );
}