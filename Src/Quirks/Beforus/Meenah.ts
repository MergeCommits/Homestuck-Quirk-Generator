import { Quirk } from "../Quirk";


export class Meenah extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Meenah Peixes", "feferi");
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.checked) { this.fishPuns(); }
        this.replaceStr("H", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }
}