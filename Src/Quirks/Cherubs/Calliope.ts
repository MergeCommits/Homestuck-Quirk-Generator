import { Quirk } from "../Quirk";
import { CAT_CHE } from "../../Category";

export class Calliope extends Quirk {
    constructor() {
        super("Calliope", "", CAT_CHE);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("u", "U");
    }
}