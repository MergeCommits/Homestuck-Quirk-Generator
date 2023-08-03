import Feferi from "quirks/canon/alternia/Feferi";
import { beforusTag } from "quirks/canon/Tags";

export default class Meenah extends Feferi {
    public constructor() {
        super("Meenah Peixes", beforusTag);
    }

    protected override quirkify(mods: { puns: boolean }): void {
        if (mods.puns) {
            this.applyFishPuns();
        }
        this.replaceString("H", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}
