import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Equius extends AlterniaQuirk {
    public constructor() {
        super("Equius Zahhak");
    }

    protected quirkify(): void {
        this.replaceString("x", "%");
        this.replaceMatchCase("nay", "neigh");
        this.replaceCaseInsensitive("loo", "100");
        this.replaceCaseInsensitive("loo", "100");
        this.upperCase("STRONG");
        this.prefix("D --> ");
    }
}