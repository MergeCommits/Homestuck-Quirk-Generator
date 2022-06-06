import Quirk from "quirks/Quirk";
import { bronyaColor } from "quirks/canon/hiveswap/Bronya";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Wanshi extends Quirk {
    public constructor() {
        super("Wanshi Adyata", hiveswapTag, bronyaColor);
    }

    protected quirkify(): void {
        this.replaceString("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    }
}