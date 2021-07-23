import React, { useState } from "react";
import Category from "quirks/Category";
import { TextField } from "@material-ui/core";
import Navigation from "components/pages/Navigation";
import useQuirkCategory from "components/utils/QuirkHook";

type QuirksPageProps = {
    categories: Category[]
};

export default function QuirksPage(props: QuirksPageProps): JSX.Element {
    const DEFAULT_TEXT = "The quick brown fox jumps the lazy dog :) .";
    const [inputText, setInputText] = useState(DEFAULT_TEXT);

    const categories = props.categories.map(category => useQuirkCategory(category));

    const quirks = props.categories.map(category => category.quirks).flat();
    const quirkOutputs = quirks.map(quirk =>
        <TextField key={quirk.identifier} value={quirk.quirkifyText(inputText)} fullWidth />
    );

    return (
        <>
            <main>
                <TextField value={inputText} onChange={e => setInputText(e.target.value)} label="Input Text"
                           fullWidth
                />
                {quirkOutputs}
            </main>
            <Navigation categories={categories} />
        </>
    );
}