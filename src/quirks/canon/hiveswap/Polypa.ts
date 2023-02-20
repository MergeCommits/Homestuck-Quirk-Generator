import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const polypaColor = "#426800";

export default class Polypa extends Quirk {
    public constructor() {
        super("Polypa Goezee", hiveswapTag, polypaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\s[\\.,]|[\\.,]", " *");
        this.suffix(" *|");
    }
}
