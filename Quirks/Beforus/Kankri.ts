import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Kankri extends Quirk {
    constructor() {
        super("Kankri", "Vantas", BloodType.Kankri, CAT_BEF);
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "6");
        this.replaceStr("[Oo]", "9");
    }
}