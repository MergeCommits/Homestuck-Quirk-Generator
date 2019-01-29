import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Karkat extends Quirk {
    constructor() {
        super("Karkat", "Vantas", BloodType.Karkat);
    }

    quirkify(): void {
        this.upperCase();
    }
}