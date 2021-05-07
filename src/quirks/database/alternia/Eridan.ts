import Quirk from "quirks/Quirk";

export default class Eridan extends Quirk {
    public constructor() {
        super("Eridan Ampora");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
    }
}