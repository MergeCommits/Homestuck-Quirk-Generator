import { Quirk } from "../Quirk";

export class Terezi extends Quirk {
    constructor() {
        super("Terezi Pyrope");
    }

    quirkify(): void {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceStr("A", "4");
        this.replaceStr("I", "1");
        this.replaceStr("E", "3");
    }
}