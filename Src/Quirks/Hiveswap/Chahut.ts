import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Chahut extends Quirk {
    constructor() {
        super("Chahut", "Maenad", CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("t", "T");
    }
}