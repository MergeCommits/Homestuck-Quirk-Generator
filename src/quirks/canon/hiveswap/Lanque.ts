import Quirk from "quirks/Quirk";
import { bronyaColor } from "quirks/canon/hiveswap/Bronya";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Lanque extends Quirk {
    public constructor() {
        super("Lanque Bombyx", hiveswapTag, bronyaColor);
    }

    protected quirkify(): void {
        this.replaceString("w", "W");
        this.replaceString("v", "V");
    }
}