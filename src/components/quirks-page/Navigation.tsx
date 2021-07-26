import { Box, Checkbox, Container, Divider, Drawer, Grid, List, Stack, useMediaQuery } from "@material-ui/core";
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
        <ListItemCheckbox key={quirk.identifier + "CheckboxActive"} {...quirk.spreadableCheckboxProps()} />
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
    const hidden = useMediaQuery(theme.breakpoints.up("md"));
    const drawerWidth = 480;

    return (
        <Box component="nav" aria-label="adjust quirk options">
            {hidden ? (
                <Box sx={{ minWidth: 300, maxWidth: drawerWidth }}>
                    <Stack direction="row">
                        <Divider orientation="vertical" flexItem sx={{ pl: 3 }} />
                        <Box sx={{ pl: 2 }}>
                            {navigationContent}
                        </Box>
                    </Stack>
                </Box>
            ) : (
                <Drawer container={container} variant="temporary" anchor={"right"}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }, }}
                >
                    {navigationContent}
                </Drawer>
            )}
        </Box>
    );
}