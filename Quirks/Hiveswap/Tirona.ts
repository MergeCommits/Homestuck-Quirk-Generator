import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Tirona extends Quirk {
    constructor() {
        super("Tirona", "Kasund", CAT_HIV, "tagora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("e", "33");
    }
}