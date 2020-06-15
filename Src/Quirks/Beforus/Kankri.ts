import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Kankri extends Quirk {
    constructor() {
        super("Kankri Vantas", CAT_BEF);
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "6");
        this.replaceStr("[Oo]", "9");
    }
}