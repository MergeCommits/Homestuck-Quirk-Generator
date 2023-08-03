import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const equiusColor = "#3030B9";

export default class Equius extends Quirk {
    public constructor() {
        super("Equius Zahhak", alterniaTag, equiusColor);
    }

    protected override quirkify(): void {
        this.replaceString("x", "%");
        this.replaceMatchCase("nay", "neigh");
        this.replaceCaseInsensitive("loo", "100");
        this.replaceCaseInsensitive("loo", "100");
        this.upperCase("STRONG");
        this.prefix("D --> ");
    }
}
