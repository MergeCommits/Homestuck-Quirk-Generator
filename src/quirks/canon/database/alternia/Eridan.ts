import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Eridan extends AlterniaQuirk {
    public constructor() {
        super("Eridan Ampora");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    }
}