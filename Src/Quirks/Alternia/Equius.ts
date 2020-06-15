import { Quirk } from "../Quirk";

export class Equius extends Quirk {
    constructor() {
        super("Equius Zahhak");
    }

    quirkify(): void {
        this.replaceStr("x", "%");
        this.replaceStr("nay", "neigh", true);
        this.replaceStr("loo", "100", false, true);
        this.replaceStr("loo", "100", false, true);
        this.replaceStr("strong", "STRONG", false, true);
        this.prefix("D --> ");
    }
}