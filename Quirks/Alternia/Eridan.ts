import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Eridan extends Quirk {
    constructor() {
        super("Eridan", "Ampora", BloodType.Violet);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("w", "ww");
        this.replaceStr("v", "vv");
    }
}