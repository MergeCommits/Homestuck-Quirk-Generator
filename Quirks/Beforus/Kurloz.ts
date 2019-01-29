import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Kurloz extends Quirk {
    constructor() {
        super("Kurloz", "Makara", BloodType.Purple, CAT_BEF);
    }

    quirkify(): void {
        this.upperCase();
    }
}