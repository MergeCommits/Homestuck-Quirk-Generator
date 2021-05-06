import { Quirk } from "../../Quirk";


export class Xefros extends Quirk {
    constructor() {
        super("Xefros Tritoh");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceString("cross", "X");
        this.replaceString("trans", "X");
        this.replaceEmotes("X$1$2");
        this.replaceString("x", "X");
    }
}