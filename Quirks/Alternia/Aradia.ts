import { AlternianQuirk } from "../AlternianQuirk";

export class Aradia extends AlternianQuirk {
    constructor() {
        super("Aradia", "Medigo");
    }

    quirkify(): void {
        this.input = this.input.toLocaleUpperCase();
    }
}