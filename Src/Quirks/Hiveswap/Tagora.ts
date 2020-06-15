import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Tagora extends Quirk {
    constructor() {
        super("Tagora Gorjek", CAT_HIV);
    }

    quirkify(): void {
        this.suffix(" *_________");
    }
}