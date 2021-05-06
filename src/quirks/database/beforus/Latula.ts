import { Quirk } from "../../Quirk";


export class Latula extends Quirk {
    constructor() {
        super("Latula Pyrope", "terezi");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("a", "4");
        this.replaceString("i", "1");
        this.replaceString("e", "3");
    }
}