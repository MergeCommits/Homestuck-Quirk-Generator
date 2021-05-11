import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Tavrisprite extends Quirk {
    private vriskaPriority: QuirkMutator;

    public constructor() {
        super("Tavrisprite");
        this.vriskaPriority = this.addMutator("Vriska Priority", "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).", false);
    }

    protected quirkify(): void {
        this.replaceEmotes("}:::$1$2");

        if (!this.vriskaPriority.active) {
            // Use Tavros quirk.
            this.upperCase();

            const arr: string[] = this.quirkText.split(/[,.?!]/g);
            for (let i = 0; i < arr.length; i++) {
                // Only replace the first instance of a match.
                arr[i] = arr[i].replace(/(\s|^)(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
            }

            this.quirkText = arr.join(",");
        }
        this.replaceString("[Bb]", "8");
    }
}