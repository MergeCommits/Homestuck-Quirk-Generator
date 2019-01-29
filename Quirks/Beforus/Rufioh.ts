import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Rufioh extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Rufioh", "Nitram", BloodType.Bronze, CAT_BEF);
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (this.censor.checked) { this.censorSwears(); }
        this.replaceStr("i", "1");
    }
}