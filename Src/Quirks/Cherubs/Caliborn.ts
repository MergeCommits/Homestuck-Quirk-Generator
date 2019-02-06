import { Quirk } from "../Quirk";
import { CAT_CHE } from "../../Category";

export class Caliborn extends Quirk {
    constructor() {
        super("Caliborn", "", CAT_CHE);
    }

    quirkify(): void {
        this.upperCase();
        this.replaceStr("U", "u");
    }
}