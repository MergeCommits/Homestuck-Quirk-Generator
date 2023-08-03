import { eridanColor } from "quirks/canon/alternia/Eridan";
import { beforusTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Cronus extends Quirk {
    public constructor() {
        super("Cronus Ampora", beforusTag, eridanColor);
    }

    protected override quirkify(): void {
        const reg = new RegExp("[wv]", "g");
        this.quirkText = this.quirkText.replace(reg, () => {
            if (Math.random() <= 0.5) {
                return "wv";
            }
            return "vw";
        });

        this.replaceString("B", "8");
    }
}
