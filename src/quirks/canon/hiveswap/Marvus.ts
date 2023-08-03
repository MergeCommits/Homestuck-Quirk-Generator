import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Marvus extends Quirk {
    public constructor() {
        super("Marvus Xoloto", hiveswapTag, chahutColor);
    }

    protected override quirkify(): void {
        this.replaceEmotes("$1o$2");
    }
}
