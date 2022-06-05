import React from "react";
import Aradia from "quirks/canon/database/alternia/Aradia";
import Equius from "quirks/canon/database/alternia/Equius";
import Tavros from "quirks/canon/database/alternia/Tavros";
import Sollux from "quirks/canon/database/alternia/Sollux";
import Karkat from "quirks/canon/database/alternia/Karkat";
import Nepeta from "quirks/canon/database/alternia/Nepeta";
import Terezi from "quirks/canon/database/alternia/Terezi";
import Vriska from "quirks/canon/database/alternia/Vriska";
import Eridan from "quirks/canon/database/alternia/Eridan";
import Feferi from "quirks/canon/database/alternia/Feferi";
import Kanaya from "quirks/canon/database/alternia/Kanaya";
import Gamzee from "quirks/canon/database/alternia/Gamzee";
import Rufioh from "quirks/canon/database/beforus/Rufioh";
import Mituna from "quirks/canon/database/beforus/Mituna";
import Meulin from "quirks/canon/database/beforus/Meulin";
import Kankri from "quirks/canon/database/beforus/Kankri";
import Latula from "quirks/canon/database/beforus/Latula";
import Porrim from "quirks/canon/database/beforus/Porrim";
import Aranea from "quirks/canon/database/beforus/Aranea";
import Horuss from "quirks/canon/database/beforus/Horuss";
import Kurloz from "quirks/canon/database/beforus/Kurloz";
import Cronus from "quirks/canon/database/beforus/Cronus";
import Meenah from "quirks/canon/database/beforus/Meenah";
import QuirkList from "components/QuirkList";

function App(): JSX.Element {
    const startingText = "The quick brown fox jumps over the lazy dog yo.";

    const canonQuirks = [
        new Aradia(),
        new Tavros(),
        new Sollux(),
        new Karkat(),
        new Nepeta(),
        new Kanaya(),
        new Terezi(),
        new Vriska(),
        new Equius(),
        new Gamzee(),
        new Eridan(),
        new Feferi(),
        new Rufioh(),
        new Mituna(),
        new Kankri(),
        new Meulin(),
        new Porrim(),
        new Latula(),
        new Aranea(),
        new Horuss(),
        new Kurloz(),
        new Cronus(),
        new Meenah()
    ];

    return (
        <QuirkList quirks={canonQuirks} inputText={startingText} />
    );
}

export default App;
