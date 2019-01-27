import { Quirk } from "../Quirk";

export class Feferi extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Feferi", "Peixes");
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.checked) { this.fishPuns(); }
        this.replaceStr("[Hh]", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }
}