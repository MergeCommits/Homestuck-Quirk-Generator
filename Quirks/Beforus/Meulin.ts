import { Quirk } from "../Quirk";
import { CAT_BEF } from "../Category";
import { BloodType } from "../BloodType";

export class Meulin extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Meulin", "Leijon", BloodType.Olive, CAT_BEF);
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.upperCase();
        if (this.puns.checked) { this.catPuns(); }
        this.replaceStr("EE", "33");
        this.replaceStr("OMG", "MOG");
    }
}