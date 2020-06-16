import { Quirk } from "./Quirk";
import { list } from "../Categories/Category";
import {Alternia} from "../Categories/Alternia";

export function loadTabs(): void {
    // CAT_BEF = new Category("Beforus", "Beforan Trolls only");
    // CAT_CHE = new Category("Cherubs", "Cherubs only");
    // CAT_SPR = new Category("Sprites", "Sprites only");
    // CAT_HIV = new Category("Hiveswap", "Hiveswap Trolls only");
    Quirk.inputField = <HTMLTextAreaElement>document.getElementById("text-input");
    Quirk.inputField.oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("text-fields");

    list.push(new Alternia());

    for (let i = 0; i < list.length; i++) {
        list[i].render();
    }

    // Make optional checkboxes table visible from the start if there are entries.
    for (let i = 0; i < list.length; i++) {
        if (list[i].optionalCheckboxes.length > 0) {
            let id = list[i].tabName.toLocaleLowerCase() + "-optional-checkboxes";
            document.getElementById(id).hidden = false;
        }
    }

    // Add in debug text.
    Quirk.inputField.dispatchEvent(new Event("input"));

    // Remove the debug text when the element's selected for the first time.
    let inputHandler = function() {
        Quirk.inputField.value = "";
        Quirk.inputField.dispatchEvent(new Event("input"));
        Quirk.inputField.removeEventListener('focus', inputHandler);
    };
    Quirk.inputField.addEventListener('focus', inputHandler);
}

export function loadQuirkElements(): void {



    // list[1].addQuirk(new Rufioh());
    // list[1].addQuirk(new Mituna());
    // list[1].addQuirk(new Kankri());
    // list[1].addQuirk(new Meulin());
    // list[1].addQuirk(new Porrim());
    // list[1].addQuirk(new Latula());
    // list[1].addQuirk(new Aranea());
    // list[1].addQuirk(new Horuss());
    // list[1].addQuirk(new Kurloz());
    // list[1].addQuirk(new Cronus());
    // list[1].addQuirk(new Meenah());
    //
    // list[2].addQuirk(new Caliborn());
    // list[2].addQuirk(new Calliope());
    //
    // list[3].addQuirk(new Tavrisprite());
    // list[3].addQuirk(new Erisolsprite());
    //
    // list[4].addQuirk(new Xefros());
    // list[4].addQuirk(new Trizza());
    // list[4].addQuirk(new Diemen());
    // list[4].addQuirk(new Ardata());
    // list[4].addQuirk(new Amisia());
    // list[4].addQuirk(new Skylla());
    // list[4].addQuirk(new Bronya());
    // list[4].addQuirk(new Tagora());
    // list[4].addQuirk(new Vikare());
    // list[4].addQuirk(new Polypa());
    // list[4].addQuirk(new Zebruh());
    // list[4].addQuirk(new Elwurd());
    // list[4].addQuirk(new Kuprum());
    // list[4].addQuirk(new Folykl());
    // list[4].addQuirk(new Remele());
    // list[4].addQuirk(new Tyzias());
    // list[4].addQuirk(new Chixie());
    // list[4].addQuirk(new Azdaja());
    // list[4].addQuirk(new Chahut());
    // list[4].addQuirk(new Zebede());
    // list[4].addQuirk(new Tegiri());
    // list[4].addQuirk(new Mallek());
    // list[4].addQuirk(new Lynera());
    // list[4].addQuirk(new Tirona());
    // list[4].addQuirk(new Boldir());
    // list[4].addQuirk(new Stelsa());
    // list[4].addQuirk(new Marsti());
    // list[4].addQuirk(new Karako());
    // list[4].addQuirk(new Wanshi());
    // list[4].addQuirk(new Fozzer());
    // list[4].addQuirk(new Daraya());
    // list[4].addQuirk(new Nihkee());
    // list[4].addQuirk(new Lanque());
    // list[4].addQuirk(new Barzum());
    // list[4].addQuirk(new Baisil());
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
    } else {
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < list[i].quirks.length; j++) {
                list[i].quirks[j].update(inputStr);
            }
        }
    }
}