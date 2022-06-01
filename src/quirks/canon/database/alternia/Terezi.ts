import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Terezi extends AlterniaQuirk {
    public constructor() {
        super("Terezi Pyrope", "#008282");
    }

    protected quirkify(): void {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceString("A", "4");
        this.replaceString("I", "1");
        this.replaceString("E", "3");
    }
}