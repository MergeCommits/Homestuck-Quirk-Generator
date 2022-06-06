import Quirk from "quirks/Quirk";
import { hiveswapTag } from "quirks/canon/Tags";
import { amisiaColor } from "quirks/canon/hiveswap/Amisia";

export default class Zebruh extends Quirk {
    public constructor() {
        const blackMod = {
            id: "black",
            title: "Black Romance",
            description: "Replaces the quadrant in Zebruh's quirk with the black romance variation.",
            defaultValue: false
        };

        const concupiscentMod = {
            id: "concupiscent",
            title: "Concupiscent",
            description: "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.",
            defaultValue: false
        };

        super("Zebruh Codakk", hiveswapTag, amisiaColor, [blackMod, concupiscentMod]);
    }

    protected quirkify(mods: { black: boolean, concupiscent: boolean }): void {
        let wrapper = "♢";
        if (mods.black && !mods.concupiscent) {
            wrapper = "♧";
        } else if (!mods.black && mods.concupiscent) {
            wrapper = "♡";
        } else if (mods.black && mods.concupiscent) {
            wrapper = "♤";
        }

        this.prefix(wrapper);
        this.suffix(wrapper);
    }
}