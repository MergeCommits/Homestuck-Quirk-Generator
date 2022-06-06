import Quirk from "quirks/Quirk";
import { diemenColor } from "quirks/canon/hiveswap/Diemen";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Marsti extends Quirk {
    public constructor() {
        super("Marsti Houtek", hiveswapTag, diemenColor);
    }

    protected quirkify(): void {
        this.suffix(" -_-");
    }
}