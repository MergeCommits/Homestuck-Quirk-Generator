import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Terezi extends Quirk {
    constructor() {
        super("Terezi", "Pyrope", BloodType.Teal);
    }

    quirkify(): void {
        this.upperCase();
        this.trollEmotes();
        this.replaceStr("A", "4");
        this.replaceStr("I", "1");
        this.replaceStr("E", "3");
    }
}