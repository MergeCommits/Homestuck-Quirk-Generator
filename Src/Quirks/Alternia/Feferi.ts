import { Quirk } from "../Quirk";
import {OptionalCheckbox} from "../OptionalCheckbox";

export class Feferi extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Feferi Peixes");
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.isChecked()) { this.fishPuns(); }
        this.replaceStr("[Hh]", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }
}