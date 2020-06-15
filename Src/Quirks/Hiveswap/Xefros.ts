import { Quirk } from "../Quirk";


export class Xefros extends Quirk {
    constructor() {
        super("Xefros Tritoh");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceStr("cross", "X");
        this.replaceStr("trans", "X");
        this.replaceEmotes("X$1$2");
        this.replaceStr("x", "X");
    }
}