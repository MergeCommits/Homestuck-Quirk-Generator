import { Checkbox, Drawer, List, useMediaQuery } from "@material-ui/core";
import React from "react";
import { CategoryHook } from "components/utils/QuirkHook";
import ListItemCheckbox from "components/quirks-page/ListItemCheckbox";
import { useTheme } from "@material-ui/core/styles";

type NavigationProps = {
    categories: CategoryHook[]
};

export default function Navigation(props: NavigationProps): JSX.Element {
    const container = window !== undefined ? () => window.document.body : undefined;

    const quirks = props.categories.map(category => category.quirks).flat();
    const mutators = quirks.map(qh => qh.mutatorHooks).flat();

    const activeCheckboxes = quirks.map(quirk =>
        <Checkbox key={quirk.identifier + "CheckboxActive"} {...quirk.spreadableCheckboxProps()} />
    );
    const mutatorCheckboxes = (
        <List>
            {mutators.map(mutator =>
                <ListItemCheckbox key={mutator.identifier} {...mutator.spreadableCheckboxProps()} />
            )}
        </List>
    );

    const navigationContent = mutatorCheckboxes;
    const theme = useTheme();
    const hidden = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <nav>
            {hidden ? (
                <Drawer variant="permanent" open anchor="right"
                        sx={{ minWidth: "100%" }}
                >
                    {navigationContent}
                </Drawer>
            ) : (
                <Drawer container={container} variant="temporary" anchor="right"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                >
                    {navigationContent}
                </Drawer>
            )}
        </nav>
    );
}