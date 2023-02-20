import { vriskaColor } from "quirks/canon/alternia/Vriska";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Remele extends Quirk {
    public constructor() {
        super("Remele Namaaq", hiveswapTag, vriskaColor);
    }

    protected quirkify(): void {
        const reg = new RegExp("\\w+", "g");
        this.quirkText = this.quirkText.replace(reg, (match) => {
            if (Math.random() <= 0.5) {
                return match + "e";
            }
            return match;
        });
    }
}
