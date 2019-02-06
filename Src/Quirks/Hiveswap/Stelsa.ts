import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Stelsa extends Quirk {
    constructor() {
        super("Stelsa", "Lamati", CAT_HIV, "tagora");
    }

    quirkify(): void {
        this.upperCase();
    }
}