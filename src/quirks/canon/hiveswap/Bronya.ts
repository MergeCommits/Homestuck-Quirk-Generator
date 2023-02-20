import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

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
