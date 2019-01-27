import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";

export class Meenah extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Meenah", "Peixes", CAT_BEF);
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.checked) { this.fishPuns(); }
        this.replaceStr("H", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }
}