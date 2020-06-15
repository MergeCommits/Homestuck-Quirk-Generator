import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Porrim extends Quirk {
    constructor() {
        super("Porrim Maryam", CAT_BEF, "kanaya");
    }

    quirkify(): void {
        this.replaceStr("([0Oo])", "$1+");
        this.replaceStr("plus", "+", false, true);
    }
}