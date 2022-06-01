import Quirk, { ModList, QuirkMod } from "quirks/Quirk";
import { Fragment, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

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

    const modsComp = mods !== null ? Object.keys(mods).map((key) => (
        <Fragment key={key}>
            <span onClick={() => setMods((prevState) => ({ ...prevState, [key]: !prevState[key] }))}>{key}</span>
            <br />
        </Fragment>
    )) : <></>;

    return (
        <Card>
            <CardContent>
                <Typography>{modsComp}</Typography>
                <Typography>{props.quirk.parseTextToQuirk(props.inputText, mods)}</Typography>
            </CardContent>
        </Card>
    );
}