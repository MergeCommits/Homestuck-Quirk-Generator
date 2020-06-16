import { Quirk } from "../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Aranea extends Quirk {
    words: OptionalCheckbox;
    vowels: OptionalCheckbox;

    constructor() {
        super("Aranea Serket", "vriska");
        this.words = this.addCheckbox("Syllables to '8'", "Aranea's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        this.vowels = this.addCheckbox("Random Vowel Swaps", "Aranea's arbitrary conversion of vowels to the number '8'.", false);
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "8");

        if (this.words.isChecked()) {
            this.replaceStr("ate", "8", false, true);
            this.replaceWord("great", "gr8", true);
        }

        if (this.vowels.isChecked()) {
            this.randReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}