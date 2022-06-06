import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/Tags";

export const equiusColor = "#3030B9";

export default class Equius extends Quirk {
    public constructor() {
        super("Equius Zahhak", alterniaTag, equiusColor);
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