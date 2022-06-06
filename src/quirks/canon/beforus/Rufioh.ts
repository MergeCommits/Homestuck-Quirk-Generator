import Horuss from "quirks/canon/beforus/Horuss";
import { tavrosColor } from "quirks/canon/alternia/Tavros";

export default class Rufioh extends Horuss {
    public constructor() {
        super("Rufioh Nitram", tavrosColor);
    }

    protected quirkify(mods: { censor: boolean }): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (mods.censor) { this.censorSwears(false); }
        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    }
}