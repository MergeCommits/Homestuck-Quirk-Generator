import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Porrim extends Quirk {
    constructor() {
        super("Porrim", "Maryam", BloodType.Jade, CAT_BEF);
    }

    quirkify(): void {
        this.replaceStr("([0Oo])", "$1+");
        this.replaceStr("plus", "+", false, true);
    }
}