import React, { useMemo, useState } from "react";
import Category from "quirks/Category";
import { Grid, TextField } from "@material-ui/core";
import useQuirkCategory from "components/utils/QuirkHook";
import QuirkOutput from "components/pages/QuirkOutput";
import Navigation from "components/pages/Navigation";

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
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <main>
                    <TextField value={inputText} onChange={e => setInputText(e.target.value)} label="Input Text"
                               fullWidth onFocus={wipeDefaultText}
                    />
                    {quirkOutputs}
                </main>
            </Grid>
            <Grid item xs={4}>
                <Navigation categories={categories} />
            </Grid>
        </Grid>
    );
}