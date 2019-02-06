import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Elwurd extends Quirk {
    constructor() {
        super("??????", "Elwurd", CAT_HIV, "vriska", true);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("l", "L");
    }
}