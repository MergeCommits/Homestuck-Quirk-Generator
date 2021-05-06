import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Feferi extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Feferi Peixes");
        this.puns = this.addMutator("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.isChecked()) { this.applyFishPuns(); }
        this.replaceString("[Hh]", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}