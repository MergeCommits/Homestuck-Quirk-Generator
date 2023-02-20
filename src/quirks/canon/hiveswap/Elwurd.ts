import { vriskaColor } from "quirks/canon/alternia/Vriska";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Elwurd extends Quirk {
    public constructor() {
        super("?????? Elwurd", hiveswapTag, vriskaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("l", "L");
    }
}
