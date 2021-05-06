import { Quirk } from "../../Quirk";


export class Baisil extends Quirk {
    constructor() {
        super("Baisil Soleil", "chahut");
    }

    quirkify(): void {
        this.lowerCase();
    }
}