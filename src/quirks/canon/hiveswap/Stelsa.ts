import Quirk from "quirks/Quirk";
import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Stelsa extends Quirk {
    public constructor() {
        super("Stelsa Sezyat", hiveswapTag, tagoraColor);
    }

    protected quirkify(): void {
        this.upperCase();
    }
}