import { Quirk } from "../Quirk";


export class Chahut extends Quirk {
    constructor() {
        super("Chahut Maenad");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("t", "T");
    }
}