import { Quirk } from "../Quirk";


export class Meulin extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Meulin Leijon", "nepeta");
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.upperCase();
        if (this.puns.checked) { this.catPuns(); }
        this.replaceStr("EE", "33");
        this.replaceStr("OMG", "MOG");
    }
}