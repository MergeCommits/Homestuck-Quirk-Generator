import React from "react";
import { QuirkHook } from "components/utils/QuirkHook";
import ListItemCheckbox from "components/quirks-page/ListItemCheckbox";
import { Checkbox, FormControlLabel, List, Typography } from "@mui/material";

type CategorySectionProps = {
    quirks: QuirkHook[];
    onEnableCategoryClick: (enableAll: boolean) => void;
};

export default function CategorySection(props: CategorySectionProps): JSX.Element {
    const { quirks } = props;
    const mutators = quirks.map(qh => qh.mutatorHooks).flat();

    const activeCheckboxes = (<>
        <Typography variant="h2">Quirks to Display:</Typography>
        <List>
            {quirks.map(quirk =>
                <ListItemCheckbox key={quirk.identifier + "CheckboxActive"} {...quirk.spreadableCheckboxProps()} />
            )}
        </List>
    </>);
    const mutatorCheckboxes = mutators.length > 0 ? (<>
        <Typography variant="h2">Quirk Modifiers:</Typography>
        <List>
            {mutators.map(mutator =>
                <ListItemCheckbox key={mutator.identifier} {...mutator.spreadableCheckboxProps()} />
            )}
        </List>
    </>) : null;

    const activeCount = quirks.filter(q => q.isEnabled()).length;
    const checked = activeCount >= quirks.length;
    const indeterminate = !checked && activeCount > 0;

    const enableCategoryCheckbox =
        <Checkbox checked={checked} indeterminate={indeterminate} onChange={() => props.onEnableCategoryClick(!checked)} />;

    return (<>
        <FormControlLabel control={enableCategoryCheckbox} label={"Enable all quirks in this category"} />
        {activeCheckboxes}
        {mutatorCheckboxes}
    </>);
}