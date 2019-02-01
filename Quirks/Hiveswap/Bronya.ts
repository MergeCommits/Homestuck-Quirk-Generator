import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Bronya extends Quirk {
    constructor() {
        super("Bronya", "Ursama", CAT_HIV);
    }

    quirkify(): void {
        this.prefix("vV ");
        this.suffix(" Vv");
    }
}