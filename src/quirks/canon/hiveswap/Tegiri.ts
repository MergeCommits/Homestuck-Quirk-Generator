import Quirk from "quirks/Quirk";
import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Tegiri extends Quirk {
    public constructor() {
        super("Tegiri Kalbur", hiveswapTag, tagoraColor);
    }

    protected quirkify(): void {
        this.replaceString("[Ll]", "/");
    }
}