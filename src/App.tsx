import React from "react";
import QuirkCard from "components/QuirkCard";
import Aradia from "quirks/canon/database/alternia/Aradia";
import Equius from "quirks/canon/database/alternia/Equius";
import { Grid } from "@mui/material";
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

function App(): JSX.Element {
    const startingText = "The quick brown fox jumps over the lazy dog yo.";

    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            <QuirkCard quirk={new Aradia()} inputText={startingText} />
            <QuirkCard quirk={new Tavros()} inputText={startingText} />
            <QuirkCard quirk={new Sollux()} inputText={startingText} />
            <QuirkCard quirk={new Karkat()} inputText={startingText} />
            <QuirkCard quirk={new Nepeta()} inputText={startingText} />
            <QuirkCard quirk={new Kanaya()} inputText={startingText} />
            <QuirkCard quirk={new Terezi()} inputText={startingText} />
            <QuirkCard quirk={new Vriska()} inputText={startingText} />
            <QuirkCard quirk={new Equius()} inputText={startingText} />
            <QuirkCard quirk={new Gamzee()} inputText={startingText} />
            <QuirkCard quirk={new Eridan()} inputText={startingText} />
            <QuirkCard quirk={new Feferi()} inputText={startingText} />
        </Grid>
    );
}

export default App;
