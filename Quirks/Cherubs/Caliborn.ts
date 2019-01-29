import { Quirk } from "../Quirk";
import { CAT_CHE } from "../Category";
import { BloodType } from "../BloodType";

export class Caliborn extends Quirk {
    constructor() {
        super("Caliborn", "", BloodType.Caliborn, CAT_CHE);
    }

    quirkify(): void {
        this.upperCase();
        this.replaceStr("U", "u");
    }
}