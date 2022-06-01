import Quirk  from "quirks/Quirk";
import { ALTERNIA_TAG } from "quirks/canon/Tags";

export default class Aradia extends Quirk {
    public constructor() {
        const deadMod = {
            id: "dead",
            title: "Dead Quirk",
            description: "Aradia's typing quirk used when she is dead (o --> 0).",
            defaultValue: true
        };

        super("Aradia Megido", ALTERNIA_TAG, deadMod);
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