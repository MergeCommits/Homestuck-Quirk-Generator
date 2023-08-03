import { diemenColor } from "quirks/canon/hiveswap/Diemen";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Marsti extends Quirk {
    public constructor() {
        super("Marsti Houtek", hiveswapTag, diemenColor);
    }

    protected override quirkify(): void {
        this.suffix(" -_-");
    }
}
