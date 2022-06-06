import Quirk from "quirks/Quirk";
import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Baizli extends Quirk {
    public constructor() {
        super("Baizli Soleil", hiveswapTag, chahutColor);
    }

    protected quirkify(): void {
        this.lowerCase();
    }
}