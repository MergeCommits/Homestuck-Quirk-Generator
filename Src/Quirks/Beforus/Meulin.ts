import { Quirk } from "../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Meulin extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Meulin Leijon", "nepeta");
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.upperCase();
        if (this.puns.isChecked()) { this.catPuns(); }
        this.replaceStr("EE", "33");
        this.replaceStr("OMG", "MOG");
    }
}