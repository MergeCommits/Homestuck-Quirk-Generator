import { Quirk, QuirkModList } from "quirks/Quirk";
import { Fragment, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

type QuirkCardProps = {
    quirk: Quirk;
    inputText: string;
};

function getInitialModValues(mods: QuirkModList) {
    return Object.keys(mods).reduce((result:{ [key:string]:boolean }, key) => {
        result[key] = mods[key].defaultValue;
        return result;
    }, {});
}

export default function QuirkCard(props: QuirkCardProps): JSX.Element {
    const [mods, setMods] = useState<{ [key: string]: boolean }>(props.quirk.mods !== undefined ? getInitialModValues(props.quirk.mods) : {});

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
                <Typography>{props.quirk.quirkify(props.inputText, mods !== null ? mods : undefined)}</Typography>
            </CardContent>
        </Card>
    );
}