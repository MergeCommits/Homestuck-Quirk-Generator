import { Quirk } from "../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Rufioh extends Quirk {
    censor: OptionalCheckbox;

    constructor() {
        super("Rufioh Nitram", "tavros");
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (this.censor.isChecked()) { this.censorSwears(); }
        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    }
}