import Quirk from "quirks/Quirk";

export default class Terezi extends Quirk {
    public constructor() {
        super("Terezi Pyrope");
    }

    protected quirkify(): void {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceString("A", "4");
        this.replaceString("I", "1");
        this.replaceString("E", "3");
    }
}