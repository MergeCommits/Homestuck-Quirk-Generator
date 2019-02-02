import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Chixie extends Quirk {
    constructor() {
        super("Chixie", "Roixmr", CAT_HIV, "skylla");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("\\.", " /");
    }
}