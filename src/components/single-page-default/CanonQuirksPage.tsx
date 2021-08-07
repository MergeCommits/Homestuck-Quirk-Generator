import React from "react";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import Cherubs from "quirks/collections/Cherubs";
import Sprites from "quirks/collections/Sprites";
import Hiveswap from "quirks/collections/Hiveswap";
import QuirksPage from "components/quirks-page/layout/QuirksPage";

import "assets/scss/quirk-colors/quirk-colors.scss";

export default function CanonQuirksPage(): JSX.Element {
    const categories = [
        new Alternia(),
        new Beforus(),
        new Cherubs(),
        new Sprites(),
        new Hiveswap(),
    ];

    return <QuirksPage categories={categories} />;
}