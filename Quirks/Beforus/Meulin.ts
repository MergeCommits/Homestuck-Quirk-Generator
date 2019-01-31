import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";

export class Meulin extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Meulin", "Leijon", CAT_BEF, "nepeta");
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.upperCase();
        if (this.puns.checked) { this.catPuns(); }
        this.replaceStr("EE", "33");
        this.replaceStr("OMG", "MOG");
    }
}