import { bronyaColor } from "quirks/canon/hiveswap/Bronya";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Daraya extends Quirk {
    public constructor() {
        const emphasisMod = {
            id: "emphasis",
            title: "Emphasis",
            description:
                "Surrounds Daraya's text with triple the amount of triangles for emphasis.",
            defaultValue: false,
        };

        super("Daraya Jonjet", hiveswapTag, bronyaColor, [emphasisMod]);
    }

    protected quirkify(mods: { emphasis: boolean }): void {
        this.lowerCase();
        if (!mods.emphasis) {
            this.prefix("▲");
            this.suffix("▼");
        } else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    }
}
