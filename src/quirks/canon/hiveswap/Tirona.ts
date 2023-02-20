import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Tirona extends Quirk {
    public constructor() {
        super("Tirona Kasund", hiveswapTag, tagoraColor);
    }

    protected quirkify(): void {
        this.replaceCaseInsensitive("e", "33");
        this.replaceEmotes("33$1$2");
    }
}
