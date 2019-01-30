import { Quirk } from "../Quirk";
import { BloodType } from "../BloodType";

export class Vriska extends Quirk {
    words: HTMLInputElement;
    vowels: HTMLInputElement;

    constructor() {
        super("Vriska", "Serket", BloodType.Cerulean);
        this.words = this.addCheckbox("Syllables to '8'", "Vriska's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        this.vowels = this.addCheckbox("Random Vowel Swaps", "Vriska's arbitrary conversion of vowels to the number '8'.", false);
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "8");
        this.replaceEmotes(":::$1$2");

        if (this.words.checked) {
            this.replaceStr("ate", "8", false, true);
            this.replaceWord("great", "gr8", true);
        }

        if (this.vowels.checked) {
            this.randReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}