import Quirk from "quirks/Quirk";
import { bronyaColor } from "quirks/canon/hiveswap/Bronya";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Lynera extends Quirk {
    public constructor() {
        super("Lynera Skalbi", hiveswapTag, bronyaColor);
    }

    protected quirkify(): void {
        this.prefix("-");
    }
}