import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Mallek extends Quirk {
    constructor() {
        super("Mallek", "Adalov", CAT_HIV, "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    }
}