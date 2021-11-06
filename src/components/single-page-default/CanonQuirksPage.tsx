import React from "react";
import Alternia from "quirks/canon/collections/Alternia";
import Beforus from "quirks/canon/collections/Beforus";
import Cherubs from "quirks/canon/collections/Cherubs";
import Sprites from "quirks/canon/collections/Sprites";
import Hiveswap from "quirks/canon/collections/Hiveswap";
import QuirksPageView from "components/quirks-page/QuirksPageView";

import "assets/scss/quirk-colors/quirk-colors.scss";

export default function CanonQuirksPage(): JSX.Element {
    const categories = [
        new Alternia(),
        new Beforus(),
        new Cherubs(),
        new Sprites(),
        new Hiveswap(),
    ];

    return <QuirksPageView categories={categories} />;
}