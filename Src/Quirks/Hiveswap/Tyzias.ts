import { Quirk } from "../Quirk";


export class Tyzias extends Quirk {
    constructor() {
        super("Tyzias Entykk", "tagora");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("m", "mmmm");
        this.replaceString("w", "wwww");
    }
}