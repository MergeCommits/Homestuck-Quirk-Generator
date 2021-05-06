import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Horuss extends Quirk {
    censor: OptionalCheckbox;

    constructor() {
        super("Horuss Zahhak", "equius");
        this.censor = this.addMutator("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {
        if (this.censor.isChecked()) { this.censorSwears(true); }
        this.replaceString("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }
}