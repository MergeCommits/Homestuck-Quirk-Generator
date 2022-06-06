import Quirk from "quirks/Quirk";
import { amisiaColor } from "quirks/canon/hiveswap/Amisia";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Nihkee extends Quirk {
    public constructor() {
        super("Nihkee Moolah", hiveswapTag, amisiaColor);
    }

    protected quirkify(): void {
        this.prefix("[()] ");
    }
}