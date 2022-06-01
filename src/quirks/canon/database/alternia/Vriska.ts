import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Vriska extends AlterniaQuirk {
    public constructor() {
        const syllablesMod = {
            id: "syllables",
            title: "Syllable to '8'",
            description: "Replaces every syllable of the text with '8'.",
            defaultValue: true
        };

        const vowelsMod = {
            id: "vowels",
            title: "Vowels to '8'",
            description: "Replaces every vowel of the text with '8'.",
            defaultValue: false
        };

        super("Vriska Serket", syllablesMod, vowelsMod);
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