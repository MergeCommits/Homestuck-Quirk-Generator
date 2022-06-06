import Quirk from "quirks/Quirk";
import { diemenColor } from "quirks/canon/hiveswap/Diemen";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Fozzer extends Quirk {
    public constructor() {
        super("Fozzer Velyes", hiveswapTag, diemenColor);
    }

    protected quirkify(): void {
        this.replaceString("\\s", "_");
    }
}