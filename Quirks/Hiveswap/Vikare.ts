import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Vikare extends Quirk {
    constructor() {
        super("Vikare", "Ratite", CAT_HIV, "skylla");
    }

    quirkify(): void {
        this.prefix("~");
        this.suffix("~");
    }
}