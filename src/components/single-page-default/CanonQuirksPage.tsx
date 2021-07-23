import React from "react";
import Alternia from "quirks/collections/Alternia";
import QuirksPage from "components/pages/QuirksPage";

export default function CanonQuirksPage(): JSX.Element {
    const categories = [
        new Alternia(),
        // new Beforus(),
        // new Cherubs(),
        // new Sprites(),
        // new Hiveswap(),
    ];

    return <QuirksPage categories={categories} />;
}