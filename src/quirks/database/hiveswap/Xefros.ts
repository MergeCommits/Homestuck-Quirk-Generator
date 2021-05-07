import Quirk from "quirks/Quirk";


export default class Xefros extends Quirk {
    public constructor() {
        super("Xefros Tritoh");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceString("cross", "X");
        this.replaceString("trans", "X");
        this.replaceEmotes("X$1$2");
        this.replaceString("x", "X");
    }
}