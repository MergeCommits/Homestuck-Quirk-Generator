import { Quirk } from "../Quirk";
import { CAT_CHE } from "../Category";
import { BloodType } from "../BloodType";

export class Calliope extends Quirk {
    constructor() {
        super("Calliope", "", BloodType.Calliope, CAT_CHE);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("u", "U");
    }
}