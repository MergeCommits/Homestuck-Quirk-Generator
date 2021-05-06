import { Quirk } from "../../Quirk";


export class Kankri extends Quirk {
    constructor() {
        super("Kankri Vantas");
    }

    quirkify(): void {
        this.replaceString("[Bb]", "6");
        this.replaceString("[Oo]", "9");
    }
}