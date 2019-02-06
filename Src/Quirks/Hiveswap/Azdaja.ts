import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Azdaja extends Quirk {
    constructor() {
        super("Azdaja", "Knelax", CAT_HIV, "kuprum");
    }

    quirkify(): void {
        this.prefix("||| ");
        this.suffix(" |||");
    }
}