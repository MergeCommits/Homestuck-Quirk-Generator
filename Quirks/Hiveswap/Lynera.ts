import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Lynera extends Quirk {
    constructor() {
        super("Lynera", "Skalbi", CAT_HIV, "bronya");
    }

    quirkify(): void {
        this.prefix("-");
    }
}