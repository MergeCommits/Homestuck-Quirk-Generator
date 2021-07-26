import React from "react";
import { Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@material-ui/core";

type CheckboxListProps = {
    label: string;
    description?: string;
    checked: boolean;
    onChange: () => void;
    color: string;
};

export default function ListItemCheckbox(props: CheckboxListProps): JSX.Element {
    const identifier = props.label.replace(/\W/g, "").toLocaleLowerCase();
    const labelID = `checkbox-list-label-${identifier}`;
    const inputProps: {"aria-labelledby": string, "aria-describedby"?: string} = {
        "aria-labelledby": labelID
    };
    const descriptionProps: {id?: string} = {};

    if (props.description !== undefined) {
        const descriptionID = `checkbox-list-desc-${identifier}`;
        inputProps["aria-describedby"] = descriptionID;
        descriptionProps["id"] = descriptionID;
    }

    return (
        <ListItem disablePadding>
            <ListItemButton role={"checkbox"} onClick={props.onChange} TouchRippleProps={{ style: { color: props.color } } }>
                <ListItemIcon sx={{ minWidth: 48 }}>
                    <Checkbox edge="start" tabIndex={-1} sx={{ pointerEvents: "none", "&.Mui-checked": { color: props.color } }}
                              inputProps={inputProps}
                              checked={props.checked}
                    />
                </ListItemIcon>
                <ListItemText id={labelID} primary={props.label} secondary={props.description}
                              secondaryTypographyProps={descriptionProps}
                />
            </ListItemButton>
        </ListItem>
    );
}