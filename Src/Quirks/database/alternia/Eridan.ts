import { Quirk } from "../../Quirk";

export class Eridan extends Quirk {
    constructor() {
        super("Eridan Ampora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    }
}