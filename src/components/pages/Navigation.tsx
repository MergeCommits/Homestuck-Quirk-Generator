import { Checkbox, Drawer, Hidden } from "@material-ui/core";
import React from "react";
import { CategoryHook } from "components/utils/QuirkHook";

type NavigationProps = {
    categories: CategoryHook[]
};

export default function Navigation(props: NavigationProps): JSX.Element {
    const container = window !== undefined ? () => window.document.body : undefined;

    const quirkHooks = props.categories.map(category => category.quirkHooks).flat();
    const mutatorHooks = quirkHooks.map(qh => qh.mutatorHooks).flat();

    const drawerContent = mutatorHooks.map((mutator, index) =>
        <Checkbox key={index} {...mutator.spreadableCheckboxProps()} />
    );

    return (
        <nav>
            <Hidden smUp implementation="css">
                <Drawer container={container} variant="temporary" anchor="right"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                >
                    {drawerContent}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer variant="permanent" open anchor="right">
                    {drawerContent}
                </Drawer>
            </Hidden>
        </nav>
    );
}