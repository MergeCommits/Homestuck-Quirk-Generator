import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Tavrisprite extends Quirk {
    private vriskaPriority: Modifier;

    public constructor() {
        super("Tavrisprite");
        this.vriskaPriority = this.addModifier("Vriska Priority", "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).", false);
    }

    protected quirkify(): void {
        this.replaceEmotes("}:::$1$2");

        if (!this.vriskaPriority.active) {
            // Use Tavros quirk.
            this.upperCase();

            const arr: string[] = this.quirkText.split(/[,.?!]/g);
            for (let i = 0; i < arr.length; i++) {
                // Only replace the first instance of a match.
                arr[i] = arr[i].replace(/(\s|^)(\w)/, chr => chr.toLocaleLowerCase());
            }

            this.quirkText = arr.join(",");
        }
        this.replaceString("[Bb]", "8");
    }
}