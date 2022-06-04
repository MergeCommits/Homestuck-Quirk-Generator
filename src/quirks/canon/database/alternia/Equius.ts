import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export const equiusColor = "#303099";

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