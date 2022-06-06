import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";
import { vriskaColor } from "quirks/canon/alternia/Vriska";

export default class Elwurd extends Quirk {
    public constructor() {
        super("?????? Elwurd", hiveswapTag, vriskaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("l", "L");
    }
}