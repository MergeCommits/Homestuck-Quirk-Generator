import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Xefros extends Quirk {
    constructor() {
        super("Xefros", "Tritoh", CAT_HIV);
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