import { AlternianQuirk } from "../AlternianQuirk";

export class Aradia extends AlternianQuirk {
    dead: HTMLInputElement;

    constructor() {
        super("Aradia", "Medigo");
        this.dead = this.addCheckbox("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.dead.checked) {
            this.replaceChars("o", "0");

            if (Math.random() < 0.5) {
                this.suffix(" ribbit");
            }
        }
    }
}