import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Aradia extends AlterniaQuirk {
    public constructor() {
        const deadMod = {
            id: "dead",
            title: "Dead Quirk",
            description: "Replaces all o's with 0's.",
            defaultValue: true
        };

        super("Aradia Megido", "#a10000", deadMod);
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