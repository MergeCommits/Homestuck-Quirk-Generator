import Quirk from "quirks/Quirk";
import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Marvus extends Quirk {
    public constructor() {
        super("Marvus Xoloto", hiveswapTag, chahutColor);
    }

    protected quirkify(): void {
        this.replaceEmotes("$1o$2");
    }
}