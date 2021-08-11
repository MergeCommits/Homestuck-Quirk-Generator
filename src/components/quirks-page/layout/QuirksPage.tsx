import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { AppBar, Box, Container, IconButton, TextField, Toolbar, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/quirks-page/QuirkOutput";
import Navigation  from "components/quirks-page/layout/Navigation";
import { useTheme } from "@material-ui/core/styles";

type QuirksPageProps = {
    categories: Category[]
};

export default function QuirksPage(props: QuirksPageProps): JSX.Element {
    const DEFAULT_TEXT = "The quick brown fox jumps the lazy dog :) .";
    const [inputText, setInputText] = useState(DEFAULT_TEXT);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [defaultTextWiped, setDefaultTextWiped] = useState(false);
    const wipeDefaultText = () => {
        if (!defaultTextWiped) {
            setDefaultTextWiped(true);
            setInputText("");
        }
    };

    const categories = props.categories.map(category => useQuirkCategory(category));

    const quirks = categories.map(category => category.quirks).flat();
    const quirkOutputs = quirks.map(quirk =>
        useMemo(() => <QuirkOutput key={quirk.identifier} quirk={quirk} inputText={inputText} />, [inputText, ...quirk.memoizationDependencies()])
    );

    const theme = useTheme();

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
    const sidebarBreakpoint = "md";
    const sidebarBreakpointAndUpQuery = theme.breakpoints.up(sidebarBreakpoint);
    const sidebarPersistent = useMediaQuery(sidebarBreakpointAndUpQuery);

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ display: "flex" }}>
                <AppBar position="fixed">
                    <Toolbar sx={{ justifyContent: "flex-end" }}>
                        <IconButton color="inherit" edge="start" aria-label="open drawer"
                                    onClick={handleDrawerToggle} sx={{ [sidebarBreakpointAndUpQuery]: { display: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Toolbar sx={{ mb: 2 }} />
                    <TextField id={"input-text-field"} value={inputText} onChange={e => setInputText(e.target.value)}
                               label="Input Text" fullWidth
                               onFocus={wipeDefaultText} multiline
                    />
                    {quirkOutputs}
                </Box>
                <Navigation categories={categories} sidebarBreakpoint={sidebarBreakpoint} sidebarPersistent={sidebarPersistent}
                            drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                />
            </Box>
        </Container>
    );
}