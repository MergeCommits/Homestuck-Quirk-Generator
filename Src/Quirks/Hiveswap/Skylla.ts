import { Quirk } from "../Quirk";


export class Skylla extends Quirk {
    constructor() {
        super("Skylla Koriga");
    }

    quirkify(): void {
        this.replaceStr("y", "yy");
        this.replaceStr("Y", "YY");
    }
}