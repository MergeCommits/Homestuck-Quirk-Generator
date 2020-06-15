import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Karako extends Quirk {
    constructor() {
        super("Karako Pierot", CAT_HIV, "chahut");
    }

    quirkify(): void {
        this.replaceStr("\\w+", "honk", true);
    }
}