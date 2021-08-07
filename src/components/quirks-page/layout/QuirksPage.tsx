import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { AppBar, Box, Container, IconButton, TextField, Toolbar, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/quirks-page/QuirkOutput";
import Navigation, { DRAWER_WIDTH } from "components/quirks-page/layout/Navigation";
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
    const sidebarBreakpoint = theme.breakpoints.up("md");
    const sidebarPersistent = useMediaQuery(sidebarBreakpoint);

    return (
        <Container maxWidth={"xl"}>
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
                    mr: { md: `${DRAWER_WIDTH}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        hidden={!sidebarPersistent}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, pt: 3, [sidebarBreakpoint]: { minWidth: "400px" } }}>
                    <TextField id={"input-text-field"} value={inputText} onChange={e => setInputText(e.target.value)}
                               label="Input Text" fullWidth sx={{ maxWidth: theme.breakpoints.values.md }}
                               onFocus={wipeDefaultText} multiline
                    />
                    {quirkOutputs}
                </Box>
                <Navigation categories={categories}
                            sidebarPersistent={sidebarPersistent} drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                />
            </Box>
        </Container>
    );
}