import Nepeta from "quirks/canon/database/alternia/Nepeta";
import { beforusTag } from "quirks/canon/database/Tags";

export default class Meulin extends Nepeta {
    public constructor() {
        super("Meulin Leijon", beforusTag);
    }

    protected quirkify(mods: { puns: boolean }): void {
        this.upperCase();
        if (mods.puns) { this.applyCatPuns(); }
        this.replaceString("EE", "33");
        this.replaceString("OMG", "MOG");
    }
}