import { Quirk } from "../Quirk";

export class Aradia extends Quirk {
    dead: HTMLInputElement;

    constructor() {
        super("Aradia", "Medigo");
        this.dead = this.addCheckbox("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.dead.checked) {
            this.replaceStr("o", "0");

            if (Math.random() < 0.4) {
                this.suffix(" ribbit");
            }
        }
    }
}