import { Quirk } from "../Quirk";


export class Latula extends Quirk {
    constructor() {
        super("Latula Pyrope", "terezi");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("a", "4");
        this.replaceStr("i", "1");
        this.replaceStr("e", "3");
    }
}