import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

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
