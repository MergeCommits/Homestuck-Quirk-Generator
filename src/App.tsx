import React from "react";
import Aradia from "quirks/canon/database/alternia/Aradia";
import { Quirk } from "quirks/Quirk";

function App(): JSX.Element {
    const a = Aradia as Quirk;
    return (
        <div>{a.quirkify("The quick brown fox jumps over the lazy dog yo", { dead: true })}</div>
    );
}

export default App;
