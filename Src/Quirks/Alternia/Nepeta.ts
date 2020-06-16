import { Quirk } from "../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Nepeta extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Nepeta Leijon");
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.puns.isChecked()) { this.catPuns(); }
        this.replaceStr("ee", "33");
        this.prefix(":33 < ");
    }
}