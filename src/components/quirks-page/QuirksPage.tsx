import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { Box, Container, TextField } from "@material-ui/core";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/quirks-page/QuirkOutput";
import Navigation from "components/quirks-page/Navigation";

type QuirksPageProps = {
    categories: Category[]
};

export default function QuirksPage(props: QuirksPageProps): JSX.Element {
    const DEFAULT_TEXT = "The quick brown fox jumps the lazy dog :) .";
    const [inputText, setInputText] = useState(DEFAULT_TEXT);

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

    return (
        <Container maxWidth={"xl"}>
            <Box sx={{ display: "flex" }}>
                <Box component="main" sx={{ flexGrow: 1, pt: 3 }}>
                    <TextField id={"input-text-field"} value={inputText} onChange={e => setInputText(e.target.value)}
                               label="Input Text" fullWidth onFocus={wipeDefaultText}
                    />
                    {quirkOutputs}
                </Box>
                <Navigation categories={categories} />
            </Box>
        </Container>
    );
}