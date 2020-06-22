import { Quirk } from "../Quirk";


export class Skylla extends Quirk {
    constructor() {
        super("Skylla Koriga");
    }

    quirkify(): void {
        this.replaceString("y", "yy");
        this.replaceString("Y", "YY");
    }
}