import React from "react";
import ListItemCheckbox from "components/quirks-page/ListItemCheckbox";
import { Checkbox, FormControlLabel, List, Typography } from "@mui/material";
import Quirk from "quirks/Quirk";
import { QuirkProps } from "components/quirks-page/QuirksPageView";

type CategorySectionProps = QuirkProps & {
    quirks: Quirk[];
    onEnableCategoryClick: (enableAll: boolean) => void;
};

export default function CategoryOptions(props: CategorySectionProps): JSX.Element {
    const { quirks } = props;
    const modifiers = quirks.map(q => q.modifiers).flat();

    const activeCheckboxes = (<>
        <Typography variant="h2">Quirks to Display:</Typography>
        <List>
            {quirks.map(quirk =>
                <ListItemCheckbox key={quirk.identifier + "CheckboxActive"} label={quirk.name}
                                  checked={props.enabledQuirkViews[quirk.identifier]} onChange={() => props.onQuirkStateChange(quirk.identifier)}
                                  color={`var(--${quirk.identifier}-color)`}
                />
            )}
        </List>
    </>);
    const modifierCheckboxes = modifiers.length > 0 ? (<>
        <Typography variant="h2">Quirk Modifiers:</Typography>
        <List>
            {modifiers.map(modifier =>
                <ListItemCheckbox key={modifier.identifier} label={modifier.label} description={modifier.description}
                                  checked={props.enabledQuirkModifiers[modifier.identifier]}
                                  onChange={() => props.onModifierStateChange(modifier.identifier)}
                                  color={`var(--${modifier.quirkIdentifier}-color)`}
                />
            )}
        </List>
    </>) : null;

    const activeCount = quirks.filter(q => props.enabledQuirkViews[q.identifier]).length;
    const checked = activeCount >= quirks.length;
    const indeterminate = !checked && activeCount > 0;

    const enableCategoryCheckbox =
        <Checkbox checked={checked} indeterminate={indeterminate} onChange={() => props.onEnableCategoryClick(!checked)} />;

    return (<>
        <FormControlLabel control={enableCategoryCheckbox} label={"Enable all quirks in this category"} />
        {activeCheckboxes}
        {modifierCheckboxes}
    </>);
}