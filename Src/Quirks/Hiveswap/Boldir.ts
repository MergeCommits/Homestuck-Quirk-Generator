import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Boldir extends Quirk {
    constructor() {
        super("Boldir", "Lamati", CAT_HIV, "polypa");
    }

    quirkify(): void {
        this.lowerCase();
        this.prefix("(");
        this.suffix(")");
    }
}