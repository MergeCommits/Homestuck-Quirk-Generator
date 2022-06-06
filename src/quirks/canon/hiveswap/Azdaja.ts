import Quirk from "quirks/Quirk";
import { ciravaColor } from "quirks/canon/hiveswap/Cirava";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Azdaja extends Quirk {
    public constructor() {
        super("Azdaja Knelax", hiveswapTag, ciravaColor);
    }

    protected quirkify(): void {
        this.prefix("||| ");
        this.suffix(" |||");
    }
}