import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Tavrisprite extends Quirk {
    vriskaPriority: OptionalCheckbox;

    constructor() {
        super("Tavrisprite");
        this.vriskaPriority = this.addMutator("Vriska Priority", "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).");
    }

    quirkify(): void {
        this.replaceEmotes("}:::$1$2");

        if (!this.vriskaPriority.isChecked()) {
            // Use Tavros quirk.
            this.upperCase();

            let arr: string[] = this.input.split(/[,.?!]/g);
            for (let i = 0; i < arr.length; i++) {
                // Only replace the first instance of a match.
                arr[i] = arr[i].replace(/(\s|^)(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
            }

            this.input = arr.join(",");
        }
        this.replaceString("[Bb]", "8");
    }
}