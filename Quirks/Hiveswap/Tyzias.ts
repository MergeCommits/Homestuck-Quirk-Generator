import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Tyzias extends Quirk {
    constructor() {
        super("Tyzias", "Entykk", CAT_HIV, "tagora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("m", "mmmm");
        this.replaceStr("w", "wwww");
    }
}