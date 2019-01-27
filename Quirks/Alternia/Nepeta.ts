import { Quirk } from "../Quirk";

export class Nepeta extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Nepeta", "Leijon");
        this.puns = this.addCheckbox("Cat Puns", "Self-expurrnatory!", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.puns.checked) { this.catPuns(); }
        this.replaceStr("ee", "33");
        this.prefix(":33 < ");
    }

    catPuns(): void {
        this.replaceStr("mother", "meowther", true);
        this.replaceStr("for", "fur", true);
        this.replaceStr("pause", "paws", true);
        this.replaceStr("cause", "claws", true);
        this.replaceStr("now", "meow", true);
        this.replaceStr("(per|pre)", "pur", true);
    }
}