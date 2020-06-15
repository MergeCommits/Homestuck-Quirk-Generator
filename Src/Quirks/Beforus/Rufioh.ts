import { Quirk } from "../Quirk";


export class Rufioh extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Rufioh Nitram", "tavros");
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