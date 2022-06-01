import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Karkat extends AlterniaQuirk {
    public constructor() {
        super("Karkat Vantas");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}