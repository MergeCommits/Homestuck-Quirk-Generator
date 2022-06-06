import Quirk from "quirks/Quirk";
import { skyllaColor } from "quirks/canon/hiveswap/Skylla";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Chixie extends Quirk {
    public constructor() {
        super("Chixie Roixmr", hiveswapTag, skyllaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\s[\\.,]|[\\.,]", " /");
    }
}