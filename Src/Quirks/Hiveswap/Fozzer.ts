import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Fozzer extends Quirk {
    constructor() {
        super("Fozzer Velyes", CAT_HIV, "diemen");
    }

    quirkify(): void {
        this.replaceStr("\\s", "_");
    }
}