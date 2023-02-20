import { skyllaColor } from "quirks/canon/hiveswap/Skylla";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Vikare extends Quirk {
    public constructor() {
        super("Vikare Ratite", hiveswapTag, skyllaColor);
    }

    protected quirkify(): void {
        this.prefix("~");
        this.suffix("~");
    }
}
