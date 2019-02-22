import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Skylla extends Quirk {
    constructor() {
        super("Skylla", "Koriga", CAT_HIV);
    }

    quirkify(): void {
        this.replaceStr("y", "yy");
        this.replaceStr("Y", "YY");
    }
}