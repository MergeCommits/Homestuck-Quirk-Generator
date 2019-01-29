import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Feferi extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Feferi", "Peixes", BloodType.Fuchsia);
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.checked) { this.fishPuns(); }
        this.replaceStr("[Hh]", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }
}