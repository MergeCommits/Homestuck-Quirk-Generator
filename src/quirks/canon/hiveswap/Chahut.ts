import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export const chahutColor = "#5C0089";

export default class Chahut extends Quirk {
    public constructor() {
        super("Chahut Maenad", hiveswapTag, chahutColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("t", "T");
    }
}