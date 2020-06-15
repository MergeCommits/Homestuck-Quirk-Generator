import { Quirk } from "./Quirk";
import { list } from "../Category";

import { Aradia } from "./Alternia/Aradia";
import { Tavros } from "./Alternia/Tavros";
import { Sollux } from "./Alternia/Sollux";
import { Karkat } from "./Alternia/Karkat";
import { Nepeta } from "./Alternia/Nepeta";
import { Kanaya } from "./Alternia/Kanaya";
import { Terezi } from "./Alternia/Terezi";
import { Vriska } from "./Alternia/Vriska";
import { Equius } from "./Alternia/Equius";
import { Gamzee } from "./Alternia/Gamzee";
import { Eridan } from "./Alternia/Eridan";
import { Feferi } from "./Alternia/Feferi";
import { Rufioh } from "./Beforus/Rufioh";
import { Mituna } from "./Beforus/Mituna";
import { Kankri } from "./Beforus/Kankri";
import { Meulin } from "./Beforus/Meulin";
import { Porrim } from "./Beforus/Porrim";
import { Latula } from "./Beforus/Latula";
import { Aranea } from "./Beforus/Aranea";
import { Horuss } from "./Beforus/Horuss";
import { Kurloz } from "./Beforus/Kurloz";
import { Cronus } from "./Beforus/Cronus";
import { Meenah } from "./Beforus/Meenah";
import { Caliborn } from "./Cherubs/Caliborn";
import { Calliope } from "./Cherubs/Calliope";
import { Tavrisprite } from "./Sprites/Tavrisprite";
import { Erisolsprite } from "./Sprites/Erisolsprite";
import { Xefros } from "./Hiveswap/Xefros";
import { Trizza } from "./Hiveswap/Trizza";
import { Diemen } from "./Hiveswap/Diemen";
import { Ardata } from "./Hiveswap/Ardata";
import { Amisia } from "./Hiveswap/Amisia";
import { Skylla } from "./Hiveswap/Skylla";
import { Bronya } from "./Hiveswap/Bronya";
import { Tagora } from "./Hiveswap/Tagora";
import { Vikare } from "./Hiveswap/Vikare";
import { Polypa } from "./Hiveswap/Polypa";
import { Zebruh } from "./Hiveswap/Zebruh";
import { Elwurd } from "./Hiveswap/Elwurd";
import { Kuprum } from "./Hiveswap/Kuprum";
import { Folykl } from "./Hiveswap/Folykl";
import { Remele } from "./Hiveswap/Remele";
import { Tyzias } from "./Hiveswap/Tyzias";
import { Chixie } from "./Hiveswap/Chixie";
import { Azdaja } from "./Hiveswap/Azdaja";
import { Chahut } from "./Hiveswap/Chahut";
import { Zebede } from "./Hiveswap/Zebede";
import { Tegiri } from "./Hiveswap/Tegiri";
import { Mallek } from "./Hiveswap/Mallek";
import { Lynera } from "./Hiveswap/Lynera";
import { Tirona } from "./Hiveswap/TIrona";
import { Boldir } from "./Hiveswap/Boldir";
import { Stelsa } from "./Hiveswap/Stelsa";
import { Marsti } from "./Hiveswap/Marsti";
import { Karako } from "./Hiveswap/Karako";
import { Wanshi } from "./Hiveswap/Wanshi";
import { Fozzer } from "./Hiveswap/Fozzer";
import { Daraya } from "./Hiveswap/Daraya";
import { Nihkee } from "./Hiveswap/Nihkee";
import { Lanque } from "./Hiveswap/Lanque";
import { Barzum } from "./Hiveswap/Barzum";
import { Baisil } from "./Hiveswap/Baizil";

export function loadQuirkElements(): void {
    Quirk.inputField = <HTMLTextAreaElement>document.getElementById("text-input");
    Quirk.inputField.oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("textFields");

    list[0].addQuirk(new Aradia());
    list[0].addQuirk(new Tavros());
    list[0].addQuirk(new Sollux());
    list[0].addQuirk(new Karkat());
    list[0].addQuirk(new Nepeta());
    list[0].addQuirk(new Kanaya());
    list[0].addQuirk(new Terezi());
    list[0].addQuirk(new Vriska());
    list[0].addQuirk(new Equius());
    list[0].addQuirk(new Gamzee());
    list[0].addQuirk(new Eridan());
    list[0].addQuirk(new Feferi());

    list[1].addQuirk(new Rufioh());
    list[1].addQuirk(new Mituna());
    list[1].addQuirk(new Kankri());
    list[1].addQuirk(new Meulin());
    list[1].addQuirk(new Porrim());
    list[1].addQuirk(new Latula());
    list[1].addQuirk(new Aranea());
    list[1].addQuirk(new Horuss());
    list[1].addQuirk(new Kurloz());
    list[1].addQuirk(new Cronus());
    list[1].addQuirk(new Meenah());

    list[2].addQuirk(new Caliborn());
    list[2].addQuirk(new Calliope());

    list[3].addQuirk(new Tavrisprite());
    list[3].addQuirk(new Erisolsprite());

    list[4].addQuirk(new Xefros());
    list[4].addQuirk(new Trizza());
    list[4].addQuirk(new Diemen());
    list[4].addQuirk(new Ardata());
    list[4].addQuirk(new Amisia());
    list[4].addQuirk(new Skylla());
    list[4].addQuirk(new Bronya());
    list[4].addQuirk(new Tagora());
    list[4].addQuirk(new Vikare());
    list[4].addQuirk(new Polypa());
    list[4].addQuirk(new Zebruh());
    list[4].addQuirk(new Elwurd());
    list[4].addQuirk(new Kuprum());
    list[4].addQuirk(new Folykl());
    list[4].addQuirk(new Remele());
    list[4].addQuirk(new Tyzias());
    list[4].addQuirk(new Chixie());
    list[4].addQuirk(new Azdaja());
    list[4].addQuirk(new Chahut());
    list[4].addQuirk(new Zebede());
    list[4].addQuirk(new Tegiri());
    list[4].addQuirk(new Mallek());
    list[4].addQuirk(new Lynera());
    list[4].addQuirk(new Tirona());
    list[4].addQuirk(new Boldir());
    list[4].addQuirk(new Stelsa());
    list[4].addQuirk(new Marsti());
    list[4].addQuirk(new Karako());
    list[4].addQuirk(new Wanshi());
    list[4].addQuirk(new Fozzer());
    list[4].addQuirk(new Daraya());
    list[4].addQuirk(new Nihkee());
    list[4].addQuirk(new Lanque());
    list[4].addQuirk(new Barzum());
    list[4].addQuirk(new Baisil());

    // Make optional checkboxes table visible from the start if there are entries.
    for (let i = 0; i < list.length; i++) {
        if (list[i].optionalCheckboxes.length > 0) {
            let id = list[i].tabName.toLocaleLowerCase() + "Optionals";
            document.getElementById(id).hidden = false;
        }
    }

    // Remove the debug text when the element's selected for the first time.
    let inputHandler = function() {
        Quirk.inputField.value = "";
        Quirk.inputField.dispatchEvent(new Event("input"));
        Quirk.inputField.removeEventListener('focus', inputHandler);
    };
    Quirk.inputField.addEventListener('focus', inputHandler);
}

function updateText(event: MouseEvent): void {
    let input = <HTMLTextAreaElement>event.currentTarget;
    let inputStr: string = input.value;
    Quirk.autoSize(input);

    // Wipe all inputs if empty. (stops deleted text from not updating the outputs)
    if (inputStr.length < 1) {
        let txts = <HTMLCollectionOf<HTMLTextAreaElement>>document.getElementsByClassName("text-output");
        for (let i = 0; i < txts.length; i++) {
            txts[i].value = "";
            Quirk.autoSize(txts[i]);
        }

        return;
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].quirks.length; j++) {
            list[i].quirks[j].update(inputStr);
        }
    }
}