import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const tagoraColor = "#008484";

export default class Tagora extends Quirk {
    public constructor() {
        super("Tagora Gorjek", hiveswapTag, tagoraColor);
    }

    protected override quirkify(): void {
        this.suffix(" *_________");
    }
}
