import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Latula extends Quirk {
    constructor() {
        super("Latula", "Pyrope", CAT_BEF, "terezi");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("a", "4");
        this.replaceStr("i", "1");
        this.replaceStr("e", "3");
    }
}