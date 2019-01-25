import { AlternianQuirk } from "../AlternianQuirk";

export class Aradia extends AlternianQuirk {
    dead: HTMLInputElement;

    constructor() {
        super("Aradia", "Medigo");
        this.dead = this.addCheckbox("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        if (this.dead.checked) {
            this.upperCase();
        } else {
            this.lowerCase();
        }
    }
}