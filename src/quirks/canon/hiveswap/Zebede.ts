import { ciravaColor } from "quirks/canon/hiveswap/Cirava";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Zebede extends Quirk {
    public constructor() {
        super("Zebede Tongva", hiveswapTag, ciravaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.replaceString("s\\b", "z");
        this.replaceEmotes("z$1$2");
    }
}
