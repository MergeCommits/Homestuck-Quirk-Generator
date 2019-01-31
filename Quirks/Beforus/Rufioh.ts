import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";

export class Rufioh extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Rufioh", "Nitram", CAT_BEF, "tavros");
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (this.censor.checked) { this.censorSwears(); }
        this.replaceStr("i", "1");
        this.replaceEmotes("}$1$2");
    }
}