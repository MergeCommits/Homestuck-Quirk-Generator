import React from "react";
import { QuirkHook } from "components/utils/QuirkHook";
import ListItemCheckbox from "components/quirks-page/ListItemCheckbox";
import { List, Typography } from "@material-ui/core";

type CategorySectionProps = {
    quirks: QuirkHook[];
};

export default function CategorySection(props: CategorySectionProps): JSX.Element {
    const { quirks } = props;
    const mutators = quirks.map(qh => qh.mutatorHooks).flat();

    const activeCheckboxes = (
        <List>
            {quirks.map(quirk =>
                <ListItemCheckbox key={quirk.identifier + "CheckboxActive"} {...quirk.spreadableCheckboxProps()} />
            )}
        </List>
    );
    const mutatorCheckboxes = (
        <List>
            {mutators.map(mutator =>
                <ListItemCheckbox key={mutator.identifier} {...mutator.spreadableCheckboxProps()} />
            )}
        </List>
    );

    return (<>
        <Typography variant="h2">Quirks to Display:</Typography>
        {activeCheckboxes}
        <Typography variant="h2">Quirk Modifiers:</Typography>
        {mutatorCheckboxes}
    </>);
}