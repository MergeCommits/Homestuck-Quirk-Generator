import Quirk from "quirks/Quirk";
import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Karako extends Quirk {
    public constructor() {
        super("Karako Pierot", hiveswapTag, chahutColor);
    }

    protected quirkify(): void {
        this.replaceMatchCase("\\w+", "honk");
    }
}