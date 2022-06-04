import { eridanColor } from "quirks/canon/database/alternia/Eridan";
import Quirk from "quirks/Quirk";
import { beforusTag } from "quirks/canon/database/Tags";

export default class Cronus extends Quirk {
    public constructor() {
        super("Cronus Ampora", beforusTag, eridanColor);
    }

    protected quirkify(): void {
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