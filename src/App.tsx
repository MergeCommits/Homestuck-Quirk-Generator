import React from "react";
import QuirkCard from "components/QuirkCard";
import Aradia from "quirks/canon/database/alternia/Aradia";
import Equius from "quirks/canon/database/alternia/Equius";
import { Stack } from "@mui/material";

function App(): JSX.Element {
    return (
        <Stack spacing={6}>
            <QuirkCard quirk={Aradia} inputText={"The quick brown fox jumps over the lazy dog yo."} />
            <QuirkCard quirk={Equius} inputText={"The quick brown fox jumps over the lazy dog yo."} />
        </Stack>
    );
}

export default App;
