import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";

export class Horuss extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Horuss", "Zahhak", CAT_BEF);
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        if (this.censor.checked) { this.censorSwears(true); }
        this.replaceStr("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }
}