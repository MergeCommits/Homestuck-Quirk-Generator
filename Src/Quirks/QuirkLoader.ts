import { Quirk } from "./Quirk";
import { list } from "../Categories/Category";
import { Alternia } from "../Categories/Alternia";
import { Beforus } from "../Categories/Beforus";
import { Cherubs } from "../Categories/Cherubs";
import { Sprites } from "../Categories/Sprites";
import { Hiveswap } from "../Categories/Hiveswap";

export function populateTabs(): void {
    Quirk.inputField = <HTMLTextAreaElement>document.getElementById("text-input");
    Quirk.inputField.oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("text-fields");

    list.push(new Alternia());
    list.push(new Beforus());
    list.push(new Cherubs());
    list.push(new Sprites());
    list.push(new Hiveswap());

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

function updateText(event: MouseEvent): void {
    let input = <HTMLTextAreaElement>event.currentTarget;
    let inputStr: string = input.value;

    // Wipe all inputs if empty. (stops deleted text from not updating the outputs)
    if (inputStr.length < 1) {
        let txts = <HTMLCollectionOf<HTMLTextAreaElement>>document.getElementsByClassName("text-output");
        for (let i = 0; i < txts.length; i++) {
            txts[i].value = "";
            // TODO: Remove or rewrite for non-textarea element.
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