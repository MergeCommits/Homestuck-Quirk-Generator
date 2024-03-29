import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const ciravaColor = "#A2A200";

export default class Cirava extends Quirk {
    public constructor() {
        super("Cirava Hermod", hiveswapTag, ciravaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
    }
}
