import { Checkbox, Drawer, Hidden } from "@material-ui/core";
import React from "react";
import { CategoryHook } from "components/utils/QuirkHook";

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
    const mutatorCheckboxes = mutators.map(mutator =>
        <Checkbox key={mutator.identifier} {...mutator.spreadableCheckboxProps()} />
    );

    const navigationContent = [...activeCheckboxes, ...mutatorCheckboxes];

    return (
        <nav>
            <Hidden smUp implementation="css">
                <Drawer container={container} variant="temporary" anchor="right"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                >
                    {navigationContent}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer variant="permanent" open anchor="right"
                        sx={{ minWidth: "100%" }}
                >
                    {navigationContent}
                </Drawer>
            </Hidden>
        </nav>
    );
}