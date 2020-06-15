import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Polypa extends Quirk {
    constructor() {
        super("Polypa Goezee", CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("\\.", " *");
        this.suffix(" *|");
    }
}