import { Box, Drawer, Stack, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { CategoryHook } from "components/utils/QuirkHook";
import { useTheme, alpha } from "@material-ui/core/styles";
import CategorySection from "components/quirks-page/layout/CategorySection";
import { use100vh } from "react-div-100vh";

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

export const DRAWER_WIDTH = 480;

type NavigationProps = {
    categories: CategoryHook[];
    sidebarPersistent: boolean;
    drawerOpen: boolean;
    handleDrawerToggle: () => void;
};

export default function Navigation(props: NavigationProps): JSX.Element {
    const container = window !== undefined ? () => window.document.body : undefined;
    const { categories } = props;


    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const tabControls = categories.map((category, index) => <Tab key={index} label={category.name} {...a11yProps(index)} />);
    const tabs = categories.map((category, index) => (
        <TabPanel key={index} index={index} activeIndex={currentTabIndex}><CategorySection key={index} quirks={category.quirks} /></TabPanel>
    ));

    const navigationContent = (
        <Box sx={{ pl: 2 }}>
            <Tabs value={currentTabIndex} onChange={(e, newIndex) => setCurrentTabIndex(newIndex)} aria-label="quirk category tabs"
                  sx={{ maxWidth: "100%" }} variant="scrollable"
            >
                {tabControls}
            </Tabs>
            {tabs}
        </Box>
    );

    const theme = useTheme();
    const permanentBoxHeight = use100vh();
    const dividerColor = alpha(theme.palette.divider, 0.08);

    return (
        <Box component="nav" aria-label="adjust quirk options">
            {props.sidebarPersistent ? (
                <Box sx={{ minWidth: 300, maxWidth: DRAWER_WIDTH, height: permanentBoxHeight, overflowY: "scroll" }}>
                    <Stack direction="row" sx={{ ml: 3, borderLeft: "0.1em solid", borderLeftColor: dividerColor }}>
                        <Box sx={{ maxWidth: "100%" }}>
                            {navigationContent}
                        </Box>
                    </Stack>
                </Box>
            ) : (
                <Drawer container={container} variant="temporary" anchor={"right"}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        open={props.drawerOpen}
                        onClose={props.handleDrawerToggle}
                        sx={{ "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH }, }}
                >
                    {navigationContent}
                </Drawer>
            )}
        </Box>
    );
}