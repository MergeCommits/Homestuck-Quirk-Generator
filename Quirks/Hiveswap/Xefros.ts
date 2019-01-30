import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";
import { BloodType } from "../BloodType";

export class Xefros extends Quirk {
    constructor() {
        super("Xefros", "Tritoh", BloodType.Burgundy, CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceWord("cross", "X");
        this.replaceEmotes("X$1$2");
        this.replaceStr("x", "X");
    }
}