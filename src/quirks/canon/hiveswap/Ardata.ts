import { vriskaColor } from "quirks/canon/alternia/Vriska";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Ardata extends Quirk {
    public constructor() {
        super("Ardata Carmia", hiveswapTag, vriskaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.replaceString("i", "iii");
    }
}
