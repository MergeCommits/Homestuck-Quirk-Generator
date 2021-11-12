import React, { useCallback, useMemo, useState } from "react";
import Category from "quirks/Category";
import { AppBar, Box, Container, IconButton, TextField, Toolbar, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import QuirkView from "components/quirks-page/QuirkView";
import Navigation  from "components/quirks-page/Navigation";
import { useTheme } from "@mui/material/styles";
import { getLocalStorageBool, setLocalStorageBool } from "utils/localStorage";

type QuirksPageViewProps = {
    categories: Category[]
};

type QuirkEnabledState = {
    [key: string]: boolean;
};

export type QuirkProps = {
    enabledQuirkViews: QuirkEnabledState;
    enabledQuirkModifiers: QuirkEnabledState;
    onQuirkStateChange: (identifier: string, state?: boolean) => void;
    onModifierStateChange: (identifier: string, state?: boolean) => void;
};

const DEFAULT_TEXT = "The quick brown fox jumps the lazy dog :) .";

export default function QuirksPageView(props: QuirksPageViewProps): JSX.Element {
    const { categories } = props;
    const theme = useTheme();

    const [inputText, setInputText] = useState(DEFAULT_TEXT);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [defaultTextWiped, setDefaultTextWiped] = useState(false);

    const quirks = useMemo(() => categories.map(category => category.quirks).flat(), [categories]);

    const initialQuirkViews = useMemo(() => {
        const initialValue = {};
        return quirks.reduce((previousValue, quirk) => ({
            ...previousValue,
            [quirk.identifier]: getLocalStorageBool(quirk.identifier) ?? true
        }), initialValue);
    }, [quirks]);

    const initialModifiers = useMemo(() => {
        const modifiers = quirks.map(quirk => quirk.modifiers).flat();

        const initialValue = {};
        return modifiers.reduce((previousValue, modifier) => ({
            ...previousValue,
            [modifier.identifier]: getLocalStorageBool(modifier.identifier) ?? modifier.active
        }), initialValue);
    }, [quirks]);

    const [enabledQuirkViews, setEnabledQuirkViews] = useState<QuirkEnabledState>(initialQuirkViews);
    const [enabledQuirkModifiers, setEnabledQuirkModifiers] = useState<QuirkEnabledState>(initialModifiers);

    const updateEnabledQuirkView = (identifier: string, state?: boolean) => {
        setEnabledQuirkViews(prevState => {
            const newState = state ?? !prevState[identifier];

            setLocalStorageBool(identifier, newState);
            return {
                ...prevState,
                [identifier]: newState
            };
        });
    };

    const updateEnabledModifier = (identifier: string, state?: boolean) => {
        setEnabledQuirkModifiers(prevState => {
            const newState = state ?? !prevState[identifier];

            setLocalStorageBool(identifier, newState);
            return {
                ...prevState,
                [identifier]: newState
            };
        });
    };

    const setAllQuirks = useCallback((state: boolean) => {
        const initialValue = {};
        const set = quirks.reduce((previousValue, quirk) => ({
            ...previousValue,
            [quirk.identifier]: state
        }), initialValue);

        setEnabledQuirkViews(set);
    }, [quirks]);

    const setAllQuirksInCategory = useCallback((category: Category, state: boolean) =>
        category.quirks.forEach(quirk => updateEnabledQuirkView(quirk.identifier, state)), []);

    const enableAllQuirks = useCallback(() => setAllQuirks(true), [setAllQuirks]);
    const disableAllQuirks = useCallback(() => setAllQuirks(false), [setAllQuirks]);

    const wipeDefaultText = () => {
        if (!defaultTextWiped) {
            setDefaultTextWiped(true);
            setInputText("");
        }
    };

    const handleDrawerToggle = useCallback(() => setDrawerOpen(!drawerOpen), [drawerOpen]);
    const sidebarBreakpoint = "lg";
    const sidebarBreakpointQuery = theme.breakpoints.up(sidebarBreakpoint);
    const sidebarIsPersistent = useMediaQuery(sidebarBreakpointQuery);

    const quirkOutputs = quirks.map(quirk => {
        const modifierKeys = quirk.modifiers.map(m => m.identifier);
        const modifierValues: QuirkEnabledState = {};

        modifierKeys.forEach(key => modifierValues[key] = enabledQuirkModifiers[key]);

        return  <QuirkView key={quirk.identifier} quirk={quirk} inputText={inputText}
                           enabled={enabledQuirkViews[quirk.identifier]} enabledModifiers={modifierValues}
                />;
    });

    const navigation = useMemo(() => <Navigation categories={categories} sidebarBreakpoint={sidebarBreakpoint}
                                                 sidebarIsPersistent={sidebarIsPersistent}
                                                 drawerOpen={drawerOpen} handleDrawerToggle={handleDrawerToggle}
                                                 enabledQuirkViews={enabledQuirkViews} enabledQuirkModifiers={enabledQuirkModifiers}
                                                 onQuirkStateChange={updateEnabledQuirkView} onModifierStateChange={updateEnabledModifier}
                                                 onEnableAllClick={enableAllQuirks} onDisableAllClick={disableAllQuirks}
                                                 onCategoryStateChange={setAllQuirksInCategory}
                                     />, [categories, disableAllQuirks, drawerOpen,
        enableAllQuirks, enabledQuirkModifiers, enabledQuirkViews, handleDrawerToggle, setAllQuirksInCategory, sidebarIsPersistent]);

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
                        sx={{ mb: 4 }}
                    />
                    {quirkOutputs}
                </Box>
                {navigation}
            </Box>
        </Container>
    );
}