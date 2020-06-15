import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Barzum extends Quirk {
    constructor() {
        super("Barzum Soleil", CAT_HIV, "chahut");
    }

    quirkify(): void {
        this.upperCase();
    }
}