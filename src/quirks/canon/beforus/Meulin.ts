import Nepeta from "quirks/canon/alternia/Nepeta";
import { beforusTag } from "quirks/canon/Tags";

export default class Meulin extends Nepeta {
    public constructor() {
        super("Meulin Leijon", beforusTag);
    }

    protected override quirkify(mods: { puns: boolean }): void {
        this.upperCase();
        if (mods.puns) {
            this.applyCatPuns();
        }
        this.replaceString("E{2,}", (matched) => "3".repeat(matched.length));
        this.replaceString("OMG", "MOG");
    }
}
