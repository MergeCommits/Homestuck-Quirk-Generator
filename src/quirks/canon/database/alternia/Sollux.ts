import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export const solluxColor = "#a1a100";

export default class Sollux extends Quirk {
    public constructor() {
        const deadMod = {
            id: "dead",
            title: "Dead Quirk",
            description: "Replaces all o's with 0's.",
            defaultValue: false
        };

        super("Sollux Captor", alterniaTag, solluxColor, deadMod);
    }

    protected quirkify(mods: { dead: boolean }): void {
        this.lowerCase();
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
        this.replaceWord("(too|to)", "two");

        if (mods.dead) {
            this.replaceString("o", "0");
        }
    }
}