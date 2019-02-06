import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Ardata extends Quirk {
    constructor() {
        super("Ardata", "Carmia", CAT_HIV, "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("i", "iii");
    }
}