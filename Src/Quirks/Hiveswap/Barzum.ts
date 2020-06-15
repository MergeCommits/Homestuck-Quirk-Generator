import { Quirk } from "../Quirk";


export class Barzum extends Quirk {
    constructor() {
        super("Barzum Soleil", "chahut");
    }

    quirkify(): void {
        this.upperCase();
    }
}