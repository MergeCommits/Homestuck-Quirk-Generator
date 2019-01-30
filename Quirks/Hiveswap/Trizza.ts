import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";
import { BloodType } from "../BloodType";

export class Trizza extends Quirk {
    constructor() {
        super("Trizza", "Tethis", BloodType.Fuchsia, CAT_HIV);
    }

    quirkify(): void {
        this.replaceStr("[Ww]", "ψ");
    }
}