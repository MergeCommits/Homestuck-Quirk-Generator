import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/Tags";

export const vriskaColor = "#005682";

export default class Vriska extends Quirk {
    public constructor(name = "Vriska Serket", tag = alterniaTag) {
        const syllablesMod = {
            id: "syllables",
            title: "Syllables to '8'",
            description: "Replaces syllables that sound similar to '8' (such as ate) to the actual number.",
            defaultValue: true
        };

        const vowelsMod = {
            id: "vowels",
            title: "Vowels to '8'",
            description: "Arbitrarily converts vowels to the number '8'.",
            defaultValue: false
        };

        super(name, tag, vriskaColor, [syllablesMod, vowelsMod]);
    }

    protected quirkify(mods: { syllables: boolean; vowels: boolean }): void {
        this.replaceString("[Bb]", "8");
        this.replaceEmotes(":::$1$2");

        if (mods.syllables) {
            this.replaceCaseInsensitive("ate", "8");
            this.replaceCaseInsensitive("ait", "8");
            this.replaceWordMatchCase("great", "gr8");
        }

        if (mods.vowels) {
            this.randomReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}
