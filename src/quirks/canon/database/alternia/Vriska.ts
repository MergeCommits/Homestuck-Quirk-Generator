import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Vriska extends Quirk {
    private words: Modifier;
    private vowels: Modifier;

    public constructor() {
        super("Vriska Serket");
        this.words = this.addModifier(
            "Syllables to '8'",
            "Vriska's conversion of syllables that sound similar to '8' (such as ate) to the actual number.",
            true
        );
        this.vowels = this.addModifier("Random Vowel Swaps", "Vriska's arbitrary conversion of vowels to the number '8'.", false);
    }

    protected quirkify(): void {
        this.replaceString("[Bb]", "8");
        this.replaceEmotes(":::$1$2");

        if (this.words.active) {
            this.replaceCaseInsensitive("ate", "8");
            this.replaceCaseInsensitive("ait", "8");
            this.replaceWordMatchCase("great", "gr8");
        }

        if (this.vowels.active) {
            this.randomReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}