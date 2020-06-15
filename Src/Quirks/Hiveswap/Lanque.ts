import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Lanque extends Quirk {
    constructor() {
        super("Lanque Bombyx", CAT_HIV, "bronya");
    }

    quirkify(): void {
        this.replaceStr("w", "W");
        this.replaceStr("v", "V");
    }
}