import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Stelsa extends Quirk {
    public constructor() {
        super("Stelsa Sezyat", hiveswapTag, tagoraColor);
    }

    protected override quirkify(): void {
        this.upperCase();
    }
}
