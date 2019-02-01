import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Diemen extends Quirk {
    constructor() {
        super("Diemen", "Xicali", CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    }
}