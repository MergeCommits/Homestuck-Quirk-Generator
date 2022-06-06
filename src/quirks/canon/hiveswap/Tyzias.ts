import Quirk from "quirks/Quirk";
import { tagoraColor } from "quirks/canon/hiveswap/Tagora";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Tyzias extends Quirk {
    public constructor() {
        super("Tyzias Entykk", hiveswapTag, tagoraColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("m", "mmmm");
        this.replaceString("w", "wwww");
    }
}