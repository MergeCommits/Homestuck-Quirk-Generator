import { Quirk } from "../Quirk";


export class Tirona extends Quirk {
    constructor() {
        super("Tirona Kasund", "tagora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("e", "33");
    }
}