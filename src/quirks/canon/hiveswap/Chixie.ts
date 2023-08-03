import { skyllaColor } from "quirks/canon/hiveswap/Skylla";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Chixie extends Quirk {
    public constructor() {
        super("Chixie Roixmr", hiveswapTag, skyllaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.replaceString("\\s[\\.,]|[\\.,]", " /");
    }
}
