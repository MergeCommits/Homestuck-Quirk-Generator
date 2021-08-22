import React from "react";
import { QuirkHook } from "components/utils/QuirkHook";
import { Divider, Typography } from "@material-ui/core";

type QuirkOutputProps = {
    quirk: QuirkHook;
    inputText: string;
};

export default function QuirkOutput(props: QuirkOutputProps): JSX.Element {
    const { quirk } = props;
    if (!quirk.isEnabled()) {
        return <></>;
    }

    return (
        <>
            <Divider textAlign="left">{quirk.name}</Divider>
            <Typography sx={{ color: quirk.color, wordBreak: "break-word", whiteSpace: "pre-line" }}>
                {quirk.getQuirkText(props.inputText)}
            </Typography>
        </>
    );
}