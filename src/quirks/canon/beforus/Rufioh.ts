import { tavrosColor } from "quirks/canon/alternia/Tavros";
import Horuss from "quirks/canon/beforus/Horuss";

export default class Rufioh extends Horuss {
    public constructor() {
        super("Rufioh Nitram", tavrosColor);
    }

    protected quirkify(mods: { censor: boolean }): void {
        if (mods.censor) {
            this.censorSwears(false);
        }

        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    }
}
