import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";

export const bronyaColor = "#008342";

export default class Bronya extends Quirk {
    public constructor() {
        super("Bronya Ursama", hiveswapTag, bronyaColor);
    }

    protected quirkify(): void {
        this.prefix("vV ");
        this.suffix(" Vv");
    }
}