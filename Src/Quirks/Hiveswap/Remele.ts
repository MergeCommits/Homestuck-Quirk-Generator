import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Remele extends Quirk {
    constructor() {
        super("Remele", "Namaaq", CAT_HIV, "vriska");
    }

    quirkify(): void {
        this.randReplace("(\\w+)", "$1e", 0.5);
    }
}