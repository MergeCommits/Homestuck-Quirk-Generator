import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { AppBar, Box, Container, IconButton, TextField, Toolbar, useMediaQuery } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/quirks-page/QuirkOutput";
import Navigation  from "components/quirks-page/layout/Navigation";
import { useTheme, styled } from "@material-ui/core/styles";

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

    const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

    return (
        <Container maxWidth={"xl"} disableGutters={!sidebarPersistent}>
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, [sidebarBreakpoint]: { minWidth: "400px" } }}>
                    <AppBar position="sticky" sx={{ px: 0 }}>
                        <Toolbar sx={{ justifyContent: "flex-end" }}>
                            <IconButton color="inherit" edge="start" aria-label="open drawer"
                                        onClick={handleDrawerToggle} sx={{ [sidebarBreakpoint]: { display: "none" } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Offset />
                    <Box sx={{ px: 3, [sidebarBreakpoint]: { mr: 3, px: 0 } }}>
                        <TextField id={"input-text-field"} value={inputText} onChange={e => setInputText(e.target.value)}
                                   label="Input Text" fullWidth
                                   onFocus={wipeDefaultText} multiline
                        />
                        {quirkOutputs}
                    </Box>
                </Box>
                <Navigation categories={categories}
                            sidebarPersistent={sidebarPersistent} drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                />
            </Box>
        </Container>
    );
}