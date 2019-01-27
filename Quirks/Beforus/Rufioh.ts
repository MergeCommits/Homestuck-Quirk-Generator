import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";

export class Rufioh extends Quirk {
    censor: HTMLInputElement;

    constructor() {
        super("Rufioh", "Nitram", CAT_BEF);
        this.censor = this.addCheckbox("Censor", "Censors f*cking swear words.", false)
    }

    quirkify(): void {

    }
}