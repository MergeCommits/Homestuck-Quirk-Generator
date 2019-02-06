import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Baisil extends Quirk {
    constructor() {
        super("Baisil", "Soleil", CAT_HIV, "chahut");
    }

    quirkify(): void {
        this.lowerCase();
    }
}