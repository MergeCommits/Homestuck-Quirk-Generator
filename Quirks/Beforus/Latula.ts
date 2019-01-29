import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Latula extends Quirk {
    constructor() {
        super("Latula", "Pyrope", BloodType.Teal, CAT_BEF);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("a", "4");
        this.replaceStr("i", "1");
        this.replaceStr("e", "3");
    }
}