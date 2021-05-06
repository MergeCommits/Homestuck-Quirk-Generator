import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Meulin extends Quirk {
    puns: OptionalCheckbox;

    constructor() {
        super("Meulin Leijon", "nepeta");
        this.puns = this.addMutator("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.upperCase();
        if (this.puns.isChecked()) { this.applyCatPuns(); }
        this.replaceString("EE", "33");
        this.replaceString("OMG", "MOG");
    }
}