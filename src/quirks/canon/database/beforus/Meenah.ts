import Feferi from "quirks/canon/database/alternia/Feferi";
import { beforusTag } from "quirks/canon/database/Tags";


export default class Meenah extends Feferi {
    public constructor() {
        super("Meenah Peixes", beforusTag);
    }

    protected quirkify(mods: { puns: boolean }): void {
        if (mods.puns) { this.applyFishPuns(); }
        this.replaceString("H", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}