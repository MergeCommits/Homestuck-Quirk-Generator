import { Quirk } from "../Quirk";

export class Sollux extends Quirk {
    dead: HTMLInputElement;

    constructor() {
        super("Sollux", "Captor");
        this.dead = this.addCheckbox("Dead Quirk", "Sollux's typing quirk used when he is dead (o --> 0).");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("i", "ii");
        this.replaceStr("s", "2");
        this.replaceWord("(too|to)", "two");

        if (this.dead.checked) {
            this.replaceStr("o", "0");
        }
    }
}