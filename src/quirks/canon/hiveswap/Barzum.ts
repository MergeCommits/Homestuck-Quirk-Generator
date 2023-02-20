import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Barzum extends Quirk {
    public constructor() {
        super("Barzum Soleil", hiveswapTag, chahutColor);
    }

    protected quirkify(): void {
        this.upperCase();
    }
}
