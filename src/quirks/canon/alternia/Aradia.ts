import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/Tags";

export const aradiaColor = "#A10000";

export default class Aradia extends Quirk {
    public constructor() {
        const deadMod = {
            id: "dead",
            title: "Dead Quirk",
            description: "Replaces all o's with 0's.",
            defaultValue: true
        };

        super("Aradia Megido", alterniaTag, aradiaColor, [deadMod]);
    }

    protected quirkify(mods: { dead: boolean }): void {
        this.lowerCase();
        if (mods.dead) {
            this.replaceString("o", "0");

            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    }
}