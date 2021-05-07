import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Aranea extends Quirk {
    words: QuirkMutator;
    vowels: QuirkMutator;

    public constructor() {
        super("Aranea Serket");
        this.words = this.addMutator("Syllables to '8'", "Aranea's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        this.vowels = this.addMutator("Random Vowel Swaps", "Aranea's arbitrary conversion of vowels to the number '8'.", false);
    }

    protected quirkify(): void {
        this.replaceString("[Bb]", "8");

        if (this.words.active) {
            this.replaceCaseInsensitive("ate", "8");
            this.replaceWordMatchCase("great", "gr8");
        }

        if (this.vowels.active) {
            this.randomReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}