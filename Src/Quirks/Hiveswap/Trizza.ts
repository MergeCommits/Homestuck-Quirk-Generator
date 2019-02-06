import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Trizza extends Quirk {
    constructor() {
        super("Trizza", "Tethis", CAT_HIV);
    }

    quirkify(): void {
        this.replaceStr("[Ww]", "ψ");
    }
}