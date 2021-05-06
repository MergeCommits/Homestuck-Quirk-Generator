import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Nepeta extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Nepeta Leijon");
        this.puns = this.addMutator("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.puns.isChecked()) { this.applyCatPuns(); }
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    }
}