import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Sollux extends AlterniaQuirk {
    public constructor() {
        const deadMod = {
            id: "dead",
            title: "Dead Quirk",
            description: "Replaces all o's with 0's.",
            defaultValue: false
        };

        super("Sollux Captor", "#a1a100", deadMod);
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