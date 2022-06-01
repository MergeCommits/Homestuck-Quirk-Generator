import Quirk from "quirks/Quirk";
import { ALTERNIA_TAG } from "quirks/canon/Tags";

export default class Equius extends Quirk {
    public constructor() {
        super("Equius Zahhak", ALTERNIA_TAG);
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