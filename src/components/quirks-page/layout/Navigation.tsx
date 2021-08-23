import { Box, Breakpoint, Button, Drawer, Stack, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { CategoryHook } from "components/utils/QuirkHook";
import { useTheme, alpha } from "@material-ui/core/styles";
import CategorySection from "components/quirks-page/layout/CategorySection";
import { tabsClasses } from "@material-ui/core/Tabs";

interface TabPanelProps {
    children: React.ReactNode;
    index: number;
    activeIndex: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, activeIndex, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={activeIndex !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {activeIndex === index ? children : null}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

type NavigationProps = {
    categories: CategoryHook[];
    sidebarBreakpoint: Breakpoint;
    sidebarIsPersistent: boolean;
    drawerOpen: boolean;
    handleDrawerToggle: () => void;

    onEnableAllClick: () => void;
    onDisableAllClick: () => void;
};

export default function Navigation(props: NavigationProps): JSX.Element {
    const container = window !== undefined ? () => window.document.body : undefined;
    const { categories } = props;


    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabControls = categories.map((category, index) =>
        <Tab key={index} label={category.name} {...a11yProps(index)}
             wrapped sx={{
                 "&.MuiTab-root": { minWidth: "unset", px: 1 },
             }}
        />);

    const tabs = categories.map((category, index) => (
        <TabPanel key={index} index={index} activeIndex={currentTabIndex}>
            <CategorySection key={index} quirks={category.quirks}
                             onEnableCategoryClick={(enableAll) => enableAll ? category.enableAll() : category.disableAll()}
            />
        </TabPanel>
    ));

    const navigationContent = (
        <Box sx={{ px: 2, pt: 2 }}>
            <Stack direction={"row"} spacing={2} alignItems="center">
                <Button variant={"outlined"} fullWidth onClick={props.onEnableAllClick}>Enable All</Button>
                <Button variant={"outlined"} fullWidth onClick={props.onDisableAllClick}>Disable All</Button>
            </Stack>
            <Tabs value={currentTabIndex} onChange={(e, newIndex) => setCurrentTabIndex(newIndex)} aria-label="quirk category tabs"
                  variant="scrollable" scrollButtons
                  sx={{
                      [`& .${tabsClasses.scrollButtons}`]: {
                          "&.Mui-disabled": { opacity: 0.3 },
                      },
                  }}
            >
                {tabControls}
            </Tabs>
            {tabs}
        </Box>
    );

    const drawerWidth = 480;

    const theme = useTheme();
    const dividerColor = alpha(theme.palette.divider, 0.08);

    return (
        <Box component="nav" sx={{ width: { [props.sidebarBreakpoint]: drawerWidth }, flexShrink: { [props.sidebarBreakpoint]: 0 } }}
             aria-label="adjust quirk options"
        >
            {props.sidebarIsPersistent ? (
                <Box sx={{ borderLeft: "0.1em solid", borderLeftColor: dividerColor }}>
                    <Drawer anchor="right"
                            variant="permanent"
                            sx={{
                                "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
                            }}
                            open
                    >
                        {navigationContent}
                    </Drawer>
                </Box>
            ) : (
                <Drawer container={container} variant="temporary" anchor="right"
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        open={props.drawerOpen}
                        onClose={props.handleDrawerToggle}
                        sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth }, }}
                >
                    {navigationContent}
                </Drawer>
            )}
        </Box>
    );
}