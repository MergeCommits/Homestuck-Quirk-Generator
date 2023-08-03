import { bronyaColor } from "quirks/canon/hiveswap/Bronya";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Wanshi extends Quirk {
    public constructor() {
        super("Wanshi Adyata", hiveswapTag, bronyaColor);
    }

    protected override quirkify(): void {
        this.replaceString("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    }
}
