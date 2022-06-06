import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";
import { ciravaColor } from "quirks/canon/hiveswap/Cirava";

export default class Kuprum extends Quirk {
    public constructor() {
        super("Kuprum Maxlol", hiveswapTag, ciravaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.upperCase("\\bl+o[ol]*l\\b");
        this.prefix(">");
    }
}