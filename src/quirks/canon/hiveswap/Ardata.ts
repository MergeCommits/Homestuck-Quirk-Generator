import Quirk from "quirks/Quirk";
import { vriskaColor } from "quirks/canon/alternia/Vriska";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Ardata extends Quirk {
    public constructor() {
        super("Ardata Carmia", hiveswapTag, vriskaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("i", "iii");
    }
}