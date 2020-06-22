import { Quirk } from "../Quirk";


export class Karako extends Quirk {
    constructor() {
        super("Karako Pierot", "chahut");
    }

    quirkify(): void {
        this.replaceMatchCase("\\w+", "honk");
    }
}