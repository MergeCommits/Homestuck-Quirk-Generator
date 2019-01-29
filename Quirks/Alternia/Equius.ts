import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Equius extends Quirk {
    constructor() {
        super("Equius", "Zahhak", BloodType.Indigo);
    }

    quirkify(): void {
        this.replaceStr("x", "%");
        this.replaceStr("nay", "neigh", true);
        this.replaceStr("loo", "100", false, true);
        this.replaceStr("loo", "100", false, true);
        this.replaceStr("strong", "STRONG", false, true);
        this.prefix("D --> ");
    }
}