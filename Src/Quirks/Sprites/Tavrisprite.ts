import { Quirk } from "../Quirk";
import { CAT_SPR } from "../../Category";

export class Tavrisprite extends Quirk {
    vriskaPriority: HTMLInputElement;

    constructor() {
        super("Tavrisprite", CAT_SPR);
        this.vriskaPriority = this.addCheckbox("Vriska Priority", "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).");
    }

    quirkify(): void {
        this.replaceEmotes("}:::$1$2");

        if (!this.vriskaPriority.checked) {
            // Use Tavros quirk.
            this.upperCase();

            let arr: string[] = this.input.split(/[,\.\?!]/g);
            for (let i = 0; i < arr.length; i++) {
                // Only replace the first instance of a match.
                arr[i] = arr[i].replace(/(\s|^)(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
            }

            this.input = arr.join(",");
        }
        this.replaceStr("[Bb]", "8");
    }
}