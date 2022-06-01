import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Eridan extends AlterniaQuirk {
    public constructor() {
        super("Eridan Ampora", "#6a006a");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    }
}