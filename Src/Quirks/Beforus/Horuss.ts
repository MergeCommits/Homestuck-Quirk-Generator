import { Quirk } from "../Quirk";


export class Horuss extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Horuss Zahhak", "equius");
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        if (this.censor.checked) { this.censorSwears(true); }
        this.replaceStr("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }
}