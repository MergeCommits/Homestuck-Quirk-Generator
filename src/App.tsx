import React from "react";
import QuirkList from "components/QuirkList";
import { Container, Stack, Typography } from "@mui/material";
import Aradia from "quirks/canon/alternia/Aradia";
import Equius from "quirks/canon/alternia/Equius";
import Tavros from "quirks/canon/alternia/Tavros";
import Sollux from "quirks/canon/alternia/Sollux";
import Karkat from "quirks/canon/alternia/Karkat";
import Nepeta from "quirks/canon/alternia/Nepeta";
import Terezi from "quirks/canon/alternia/Terezi";
import Vriska from "quirks/canon/alternia/Vriska";
import Eridan from "quirks/canon/alternia/Eridan";
import Feferi from "quirks/canon/alternia/Feferi";
import Kanaya from "quirks/canon/alternia/Kanaya";
import Gamzee from "quirks/canon/alternia/Gamzee";
import Rufioh from "quirks/canon/beforus/Rufioh";
import Mituna from "quirks/canon/beforus/Mituna";
import Meulin from "quirks/canon/beforus/Meulin";
import Kankri from "quirks/canon/beforus/Kankri";
import Latula from "quirks/canon/beforus/Latula";
import Porrim from "quirks/canon/beforus/Porrim";
import Aranea from "quirks/canon/beforus/Aranea";
import Horuss from "quirks/canon/beforus/Horuss";
import Kurloz from "quirks/canon/beforus/Kurloz";
import Cronus from "quirks/canon/beforus/Cronus";
import Meenah from "quirks/canon/beforus/Meenah";
import Caliborn from "quirks/canon/cherubs/Caliborn";
import Calliope from "quirks/canon/cherubs/Calliope";
import Tavrisprite from "quirks/canon/sprites/Tavrisprite";
import Erisolsprite from "quirks/canon/sprites/Erisolsprite";
import Xefros from "quirks/canon/hiveswap/Xefros";
import Trizza from "quirks/canon/hiveswap/Trizza";
import Diemen from "quirks/canon/hiveswap/Diemen";
import Ardata from "quirks/canon/hiveswap/Ardata";
import Cirava from "quirks/canon/hiveswap/Cirava";
import Amisia from "quirks/canon/hiveswap/Amisia";
import Skylla from "quirks/canon/hiveswap/Skylla";
import Bronya from "quirks/canon/hiveswap/Bronya";
import Tagora from "quirks/canon/hiveswap/Tagora";
import Vikare from "quirks/canon/hiveswap/Vikare";
import Polypa from "quirks/canon/hiveswap/Polypa";
import Zebruh from "quirks/canon/hiveswap/Zebruh";
import Elwurd from "quirks/canon/hiveswap/Elwurd";
import Kuprum from "quirks/canon/hiveswap/Kuprum";
import Folykl from "quirks/canon/hiveswap/Folykl";
import Remele from "quirks/canon/hiveswap/Remele";
import Tyzias from "quirks/canon/hiveswap/Tyzias";
import Chixie from "quirks/canon/hiveswap/Chixie";
import Azdaja from "quirks/canon/hiveswap/Azdaja";
import Chahut from "quirks/canon/hiveswap/Chahut";
import Zebede from "quirks/canon/hiveswap/Zebede";
import Tegiri from "quirks/canon/hiveswap/Tegiri";
import Mallek from "quirks/canon/hiveswap/Mallek";
import Lynera from "quirks/canon/hiveswap/Lynera";
import Tirona from "quirks/canon/hiveswap/Tirona";
import Boldir from "quirks/canon/hiveswap/Boldir";
import Stelsa from "quirks/canon/hiveswap/Stelsa";
import Marsti from "quirks/canon/hiveswap/Marsti";
import Karako from "quirks/canon/hiveswap/Karako";
import Wanshi from "quirks/canon/hiveswap/Wanshi";
import Fozzer from "quirks/canon/hiveswap/Fozzer";
import Marvus from "quirks/canon/hiveswap/Marvus";
import Daraya from "quirks/canon/hiveswap/Daraya";
import Nihkee from "quirks/canon/hiveswap/Nihkee";
import Lanque from "quirks/canon/hiveswap/Lanque";
import Barzum from "quirks/canon/hiveswap/Barzum";
import Baizli from "quirks/canon/hiveswap/Baizli";

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
        new Meenah(),
        new Caliborn(),
        new Calliope(),
        new Tavrisprite(),
        new Erisolsprite(),
        new Xefros(),
        new Trizza(),
        new Diemen(),
        new Ardata(),
        new Cirava(),
        new Amisia(),
        new Skylla(),
        new Bronya(),
        new Tagora(),
        new Vikare(),
        new Polypa(),
        new Zebruh(),
        new Elwurd(),
        new Kuprum(),
        new Folykl(),
        new Remele(),
        new Tyzias(),
        new Chixie(),
        new Azdaja(),
        new Chahut(),
        new Zebede(),
        new Tegiri(),
        new Mallek(),
        new Lynera(),
        new Tirona(),
        new Boldir(),
        new Stelsa(),
        new Marsti(),
        new Karako(),
        new Wanshi(),
        new Fozzer(),
        new Marvus(),
        new Daraya(),
        new Nihkee(),
        new Lanque(),
        new Barzum(),
        new Baizli()
    ];

    return (
        <Container component={"main"} maxWidth={false} sx={{ maxWidth: "1920px" }}>
            <Stack spacing={{ md: 2, xs: 0.5 }} m={{ md: 4, xs: 0.5 }}>
                <Typography variant={"h1"}>{"Homestuck Quirk Generator"}</Typography>
                <Typography>{"Generator for Homestuck/Hiveswap typing quirks."}</Typography>
                <Typography>
                    {"Want to check out the source or report issues? See the "}
                    <a href={"https://github.com/MergeCommits/Homestuck-Quirk-Generator/"}>{"GitHub repo"}</a>{"."}
                </Typography>
                <QuirkList quirks={canonQuirks} inputText={startingText} />
            </Stack>
        </Container>
    );
}

export default App;
