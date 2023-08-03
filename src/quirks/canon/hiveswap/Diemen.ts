import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const diemenColor = "#6F210E";

export default class Diemen extends Quirk {
    public constructor() {
        super("Diemen Xicali", hiveswapTag, diemenColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    }
}
