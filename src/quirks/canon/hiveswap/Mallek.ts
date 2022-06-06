import Quirk from "quirks/Quirk";
import { vriskaColor } from "quirks/canon/alternia/Vriska";
import { hiveswapTag } from "quirks/canon/Tags";

export default class Mallek extends Quirk {
    public constructor() {
        super("Mallek Adalov", hiveswapTag, vriskaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    }
}