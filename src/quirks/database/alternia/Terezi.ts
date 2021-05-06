import { Quirk } from "../../Quirk";

export class Terezi extends Quirk {
    constructor() {
        super("Terezi Pyrope");
    }

    quirkify(): void {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceString("A", "4");
        this.replaceString("I", "1");
        this.replaceString("E", "3");
    }
}