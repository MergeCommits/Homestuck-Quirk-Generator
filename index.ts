import { Quirk } from "./Quirks/Quirk";
import { Category, list } from "./Quirks/Category";

import { Aradia } from "./Quirks/Alternia/Aradia";
import { Tavros } from "./Quirks/Alternia/Tavros";
import { Sollux } from "./Quirks/Alternia/Sollux";
import { Karkat } from "./Quirks/Alternia/Karkat";
import { Nepeta } from "./Quirks/Alternia/Nepeta";
import { Kanaya } from "./Quirks/Alternia/Kanaya";
import { Terezi } from "./Quirks/Alternia/Terezi";
import { Vriska } from "./Quirks/Alternia/Vriska";
import { Equius } from "./Quirks/Alternia/Equius";
import { Gamzee } from "./Quirks/Alternia/Gamzee";
import { Eridan } from "./Quirks/Alternia/Eridan";
import { Feferi } from "./Quirks/Alternia/Feferi";
import { Rufioh } from "./Quirks/Beforus/Rufioh";
import { Mituna } from "./Quirks/Beforus/Mituna";
import { Kankri } from "./Quirks/Beforus/Kankri";
import { Meulin } from "./Quirks/Beforus/Meulin";
import { Porrim } from "./Quirks/Beforus/Porrim";
import { Latula } from "./Quirks/Beforus/Latula";
import { Aranea } from "./Quirks/Beforus/Aranea";
import { Horuss } from "./Quirks/Beforus/Horuss";
import { Kurloz } from "./Quirks/Beforus/Kurloz";
import { Cronus } from "./Quirks/Beforus/Cronus";
import { Meenah } from "./Quirks/Beforus/Meenah";
import { Caliborn } from "./Quirks/Cherubs/Caliborn";
import { Calliope } from "./Quirks/Cherubs/Calliope";
import { Tavrisprite } from "./Quirks/Sprites/Tavrisprite";
import { Erisolsprite } from "./Quirks/Sprites/Erisolsprite";
import { Xefros } from "./Quirks/Hiveswap/Xefros";
import { Trizza } from "./Quirks/Hiveswap/Trizza";
import { Diemen } from "./Quirks/Hiveswap/Diemen";
import { Ardata } from "./Quirks/Hiveswap/Ardata";
import { Amisia } from "./Quirks/Hiveswap/Amisia";
import { Skylla } from "./Quirks/Hiveswap/Skylla";
import { Bronya } from "./Quirks/Hiveswap/Bronya";
import { Tagora } from "./Quirks/Hiveswap/Tagora";
import { Vikare } from "./Quirks/Hiveswap/Vikare";
import { Polypa } from "./Quirks/Hiveswap/Polypa";
import { Zebruh } from "./Quirks/Hiveswap/Zebruh";
import { Elwurd } from "./Quirks/Hiveswap/Elwurd";
import { Kuprum } from "./Quirks/Hiveswap/Kuprum";
import { Folykl } from "./Quirks/Hiveswap/Folykl";

document.addEventListener('DOMContentLoaded', function() {
    loadButtons();
    Category.loadTabs();
    loadQuirkFields();

    // // Have they accessed the page before?
    // var previousTime = isBool(localStorage.getItem("previousTimeSave"));

    // // Reload their previous options then.
    // if (previousTime) {
    //     var checkboxes = document.getElementsByName('toggleBox');

    //     for(var i = 0; i < checkboxes.length; i++) {
    //         var saveName = "ID " + JSON.stringify(i);
    //         checkboxes[i].checked = isBool(localStorage.getItem(saveName));
    //     }
    // } else {
    //     previousTime = true;
    // }
});

function updateText(event: MouseEvent): void {
    let input = <HTMLTextAreaElement>event.currentTarget;
    let inputStr: string = input.value;
    Quirk.autoSize(input);

    // Wipe all inputs if empty. (stops deleted text from not updating the outputs)
    if (inputStr.length < 1) {
        let txts = <HTMLCollectionOf<HTMLTextAreaElement>>document.getElementsByClassName("textOutput");
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

function loadQuirkFields(): void {
    Quirk.inputField = <HTMLTextAreaElement>document.getElementById("textInput");
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

    // Make optional checkboxes table visible from the start if there are entries.
    for (let i = 0; i < list.length; i++) {
        if (list[i].optionalCheckboxes.length > 0) {
            let id = list[i].tabName.toLocaleLowerCase() + "Optionals";
            document.getElementById(id).hidden = false;
        }
    }

    // Add in debug text.
    let str: string = "The quick brown fox jumps over the lazy dog.";
    Quirk.inputField.value = str;
    Quirk.inputField.dispatchEvent(new Event("input"));
    // Remove the debug text when the element's selected for the first time.
    Quirk.inputField.addEventListener('focus', function () {
        if (removeStart) {
            Quirk.inputField.value = "";
            Quirk.inputField.dispatchEvent(new Event("input"));
            removeStart = false;
        }
    });
}
let removeStart: boolean = true;

function toggleTheme(evt: MouseEvent) {
    const darktxt = "Dark Mode";
    const lighttxt = "Light Mode";

    // Light or dark?
    let btn = <HTMLInputElement>document.getElementById("btnThemeToggle");
    let prevDark: boolean = btn.value == darktxt;
    let body = document.getElementsByTagName("body")[0]; // Get main body.

    if (!prevDark) {
        body.className = "t-dark";
        btn.value = darktxt;
    } else {
        body.className = "";
        btn.value = lighttxt;
    }
}

function loadButtons(): void {
    document.getElementById("chkToggleC2PTR").onclick = () => document.getElementById("chkToggleC2P").click();
    document.getElementById("btnThemeToggle").onclick = toggleTheme;
    document.getElementById("btnAll").onclick = () => Category.toggleAll(true);
    document.getElementById("btnNone").onclick = () => Category.toggleAll(false);
}