import { tavrosify } from "quirks/canon/alternia/Tavros";
import { spritesTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Tavrisprite extends Quirk {
    public constructor() {
        const vriskaPriorityMod = {
            id: "vriskaPriority",
            title: "Vriska Priority",
            description:
                "Toggles between normal case (Vriska) and rEVERSE CAPS (Tavros).",
            defaultValue: false,
        };

        super("Tavrisprite", spritesTag, "#0715CD", [vriskaPriorityMod]);
    }

    protected override quirkify(mods: { vriskaPriority: boolean }): void {
        this.replaceEmotes("}:::$1$2");

        if (!mods.vriskaPriority) {
            this.quirkText = tavrosify(this.quirkText);
        }
        this.replaceString("[Bb]", "8");
    }
}
