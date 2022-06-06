import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Xefros extends Quirk {
    public constructor() {
        super("Xefros Tritoh", hiveswapTag, "#BB0000");
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