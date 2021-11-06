import React, { useMemo } from "react";
import { Divider, Typography } from "@mui/material";
import Quirk from "quirks/Quirk";

type QuirkOutputProps = {
    quirk: Quirk;
    inputText: string;
    enabled: boolean;

    enabledModifiers: { [key: string]: boolean };
};

export default function QuirkView(props: QuirkOutputProps): JSX.Element {
    const { quirk } = props;

    const quirkOutputText = useMemo(() => {
        const updateQuirkModifiers = () => quirk.modifiers.forEach(modifier => modifier.active = props.enabledModifiers[modifier.identifier]);
        updateQuirkModifiers();

        return quirk.quirkifyText(props.inputText);
    }, [props.enabledModifiers, props.inputText, quirk]);

    return useMemo(() => {
        if (!props.enabled) {
            return <></>;
        }

        return (
            <>
                <Divider textAlign="left">{quirk.name}</Divider>
                <Typography sx={{ color: `var(--${quirk.identifier}-color)`, wordBreak: "break-word", whiteSpace: "pre-line" }}>
                    {quirkOutputText}
                </Typography>
            </>
        );
    }, [props.enabled, quirk.identifier, quirk.name, quirkOutputText]);
}