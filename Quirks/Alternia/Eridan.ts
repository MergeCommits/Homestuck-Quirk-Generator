import { Quirk } from "../Quirk";

export class Eridan extends Quirk {
    constructor() {
        super("Eridan", "Ampora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("w", "ww");
        this.replaceStr("v", "vv");
    }
}