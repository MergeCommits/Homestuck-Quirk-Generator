import { Quirk } from "../Quirk";

export class Sollux extends Quirk {
    dead: HTMLInputElement;

    constructor() {
        super("Sollux", "Medigo");
        this.dead = this.addCheckbox("Dead Quirk", "Sollux's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("i", "ii");
        this.replaceStr("s", "2");
        this.replaceWord("(too|to)", "two");
        // this.replaceWord("to", "two");

        if (this.dead.checked) {
            this.replaceStr("o", "0");
        }
    }
}