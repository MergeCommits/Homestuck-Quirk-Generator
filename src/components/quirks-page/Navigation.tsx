import { Box, Checkbox, Divider, Drawer, List, Stack, useMediaQuery } from "@material-ui/core";
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
    const drawerWidth = 450;
    const dividerPadding = 3;

    return (
        <Stack direction="row" spacing="5">
            <Divider orientation="vertical" sx={{ pr: dividerPadding }} />
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, pl: dividerPadding }}
                 aria-label="mailbox folders"
            >
                {hidden ? navigationContent : (
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
        </Stack>
    );
}