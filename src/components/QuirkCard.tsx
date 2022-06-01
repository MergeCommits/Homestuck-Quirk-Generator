import Quirk, { ModList, QuirkMod } from "quirks/Quirk";
import { useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import QuirkModListPopover from "components/QuirkModListPopover";

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

    return (
        <Card>
            <CardContent>
                <Typography>{props.quirk.parseTextToQuirk(props.inputText, mods)}</Typography>
            </CardContent>
            <CardActions sx={{ height: "100px" }}>
                {props.quirk.mods.length > 0 && <QuirkModListPopover quirk={props.quirk} mods={mods} setMods={setMods} />}
            </CardActions>
        </Card>
    );
}