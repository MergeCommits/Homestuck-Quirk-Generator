import { Quirk } from "../Quirk";

export class Equius extends Quirk {
    constructor() {
        super("Equius Zahhak");
    }

    quirkify(): void {
        this.replaceString("x", "%");
        this.replaceMatchCase("nay", "neigh");
        this.replaceCaseInsensitive("loo", "100");
        this.replaceCaseInsensitive("loo", "100");
        this.upperCase("STRONG");
        this.prefix("D --> ");
    }
}