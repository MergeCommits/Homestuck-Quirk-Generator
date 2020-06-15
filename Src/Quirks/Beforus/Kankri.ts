import { Quirk } from "../Quirk";


export class Kankri extends Quirk {
    constructor() {
        super("Kankri Vantas");
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "6");
        this.replaceStr("[Oo]", "9");
    }
}