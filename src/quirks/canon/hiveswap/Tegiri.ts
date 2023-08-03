import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Tegiri extends Quirk {
    public constructor() {
        super("Tegiri Kalbur", hiveswapTag, tagoraColor);
    }

    protected override quirkify(): void {
        this.replaceString("[Ll]", "/");
    }
}
