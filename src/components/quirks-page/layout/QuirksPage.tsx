import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { AppBar, Box, Container, IconButton, TextField, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/quirks-page/QuirkOutput";
import Navigation  from "components/quirks-page/layout/Navigation";
import { useTheme } from "@mui/material/styles";

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
    const sidebarBreakpoint = "lg";
    const sidebarBreakpointQuery = theme.breakpoints.up(sidebarBreakpoint);
    const sidebarIsPersistent = useMediaQuery(sidebarBreakpointQuery);

    const handleEnableAll = () => categories.forEach(category => category.enableAll());
    const handleDisableAll = () => categories.forEach(category => category.disableAll());

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ display: "flex" }}>
                <AppBar position="fixed">
                    <Toolbar sx={{ justifyContent: "flex-end" }}>
                        <IconButton color="inherit" edge="start" aria-label="open drawer"
                                    onClick={handleDrawerToggle} sx={{ [sidebarBreakpointQuery]: { display: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Toolbar sx={{ mb: 2 }} />
                    <TextField
                        id={"input-text-field"}
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}
                        label="Input Text"
                        fullWidth
                        onFocus={wipeDefaultText}
                        multiline
                        variant="standard"
                    />
                    {quirkOutputs}
                </Box>
                <Navigation categories={categories} sidebarBreakpoint={sidebarBreakpoint} sidebarIsPersistent={sidebarIsPersistent}
                            drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                            onEnableAllClick={handleEnableAll} onDisableAllClick={handleDisableAll}
                />
            </Box>
        </Container>
    );
}