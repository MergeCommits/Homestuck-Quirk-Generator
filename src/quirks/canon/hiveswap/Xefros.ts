import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Xefros extends Quirk {
    public constructor() {
        super("Xefros Tritoh", hiveswapTag, "#BB0000");
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.replaceWord("ten", "X");
        this.replaceString("cross", "X");
        this.replaceString("trans", "X");
        this.replaceEmotes("X$1$2");
        this.replaceString("x", "X");
    }
}
