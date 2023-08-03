import { ciravaColor } from "quirks/canon/hiveswap/Cirava";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Kuprum extends Quirk {
    public constructor() {
        super("Kuprum Maxlol", hiveswapTag, ciravaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.upperCase("\\bl+o[ol]*l\\b");
        this.prefix(">");
    }
}
