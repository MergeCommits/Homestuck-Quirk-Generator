import { Container, Stack, Typography } from "@mui/material";
import QuirkList from "components/QuirkList";
import Aradia from "quirks/canon/alternia/Aradia";
import Equius from "quirks/canon/alternia/Equius";
import Eridan from "quirks/canon/alternia/Eridan";
import Feferi from "quirks/canon/alternia/Feferi";
import Gamzee from "quirks/canon/alternia/Gamzee";
import Kanaya from "quirks/canon/alternia/Kanaya";
import Karkat from "quirks/canon/alternia/Karkat";
import Nepeta from "quirks/canon/alternia/Nepeta";
import Sollux from "quirks/canon/alternia/Sollux";
import Tavros from "quirks/canon/alternia/Tavros";
import Terezi from "quirks/canon/alternia/Terezi";
import Vriska from "quirks/canon/alternia/Vriska";
import Aranea from "quirks/canon/beforus/Aranea";
import Cronus from "quirks/canon/beforus/Cronus";
import Horuss from "quirks/canon/beforus/Horuss";
import Kankri from "quirks/canon/beforus/Kankri";
import Kurloz from "quirks/canon/beforus/Kurloz";
import Latula from "quirks/canon/beforus/Latula";
import Meenah from "quirks/canon/beforus/Meenah";
import Meulin from "quirks/canon/beforus/Meulin";
import Mituna from "quirks/canon/beforus/Mituna";
import Porrim from "quirks/canon/beforus/Porrim";
import Rufioh from "quirks/canon/beforus/Rufioh";
import Caliborn from "quirks/canon/cherubs/Caliborn";
import Calliope from "quirks/canon/cherubs/Calliope";
import Amisia from "quirks/canon/hiveswap/Amisia";
import Ardata from "quirks/canon/hiveswap/Ardata";
import Azdaja from "quirks/canon/hiveswap/Azdaja";
import Baizli from "quirks/canon/hiveswap/Baizli";
import Barzum from "quirks/canon/hiveswap/Barzum";
import Boldir from "quirks/canon/hiveswap/Boldir";
import Bronya from "quirks/canon/hiveswap/Bronya";
import Chahut from "quirks/canon/hiveswap/Chahut";
import Chixie from "quirks/canon/hiveswap/Chixie";
import Cirava from "quirks/canon/hiveswap/Cirava";
import Daraya from "quirks/canon/hiveswap/Daraya";
import Diemen from "quirks/canon/hiveswap/Diemen";
import Elwurd from "quirks/canon/hiveswap/Elwurd";
import Folykl from "quirks/canon/hiveswap/Folykl";
import Fozzer from "quirks/canon/hiveswap/Fozzer";
import Karako from "quirks/canon/hiveswap/Karako";
import Kuprum from "quirks/canon/hiveswap/Kuprum";
import Lanque from "quirks/canon/hiveswap/Lanque";
import Lynera from "quirks/canon/hiveswap/Lynera";
import Mallek from "quirks/canon/hiveswap/Mallek";
import Marsti from "quirks/canon/hiveswap/Marsti";
import Marvus from "quirks/canon/hiveswap/Marvus";
import Nihkee from "quirks/canon/hiveswap/Nihkee";
import Polypa from "quirks/canon/hiveswap/Polypa";
import Remele from "quirks/canon/hiveswap/Remele";
import Skylla from "quirks/canon/hiveswap/Skylla";
import Stelsa from "quirks/canon/hiveswap/Stelsa";
import Tagora from "quirks/canon/hiveswap/Tagora";
import Tegiri from "quirks/canon/hiveswap/Tegiri";
import Tirona from "quirks/canon/hiveswap/Tirona";
import Trizza from "quirks/canon/hiveswap/Trizza";
import Tyzias from "quirks/canon/hiveswap/Tyzias";
import Vikare from "quirks/canon/hiveswap/Vikare";
import Wanshi from "quirks/canon/hiveswap/Wanshi";
import Xefros from "quirks/canon/hiveswap/Xefros";
import Zebede from "quirks/canon/hiveswap/Zebede";
import Zebruh from "quirks/canon/hiveswap/Zebruh";
import Erisolsprite from "quirks/canon/sprites/Erisolsprite";
import Tavrisprite from "quirks/canon/sprites/Tavrisprite";

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
        new Baizli(),
    ];

    return (
        <Container component={"main"} maxWidth={"xl"}>
            <Stack spacing={{ md: 2, xs: 0.5 }} m={{ md: 4, xs: 0.5 }}>
                <Typography variant={"h1"}>
                    {"Homestuck Quirk Generator"}
                </Typography>
                <Typography>
                    {"Generator for Homestuck/Hiveswap typing quirks."}
                </Typography>
                <Typography>
                    {"Want to check out the source or report issues? See the "}
                    <a
                        href={
                            "https://github.com/MergeCommits/Homestuck-Quirk-Generator/"
                        }
                    >
                        {"GitHub repo"}
                    </a>
                    {"."}
                </Typography>
                <QuirkList quirks={canonQuirks} inputText={startingText} />
            </Stack>
        </Container>
    );
}

export default App;
