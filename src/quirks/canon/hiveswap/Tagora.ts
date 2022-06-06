import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export const tagoraColor = "#008484";

export default class Tagora extends Quirk {
    public constructor() {
        super("Tagora Gorjek", hiveswapTag, tagoraColor);
    }

    protected quirkify(): void {
        this.suffix(" *_________");
    }
}