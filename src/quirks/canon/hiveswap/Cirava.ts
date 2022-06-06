import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export const ciravaColor = "#A2A200";

export default class Cirava extends Quirk {
    public constructor() {
        super("Cirava Hermod", hiveswapTag, ciravaColor);
    }

    protected quirkify(): void {
        this.lowerCase();
    }
}