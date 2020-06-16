import { Quirk } from "../Quirk";
import {OptionalCheckbox} from "../OptionalCheckbox";

export class Vriska extends Quirk {
    words: OptionalCheckbox;
    vowels: OptionalCheckbox;

    constructor() {
        super("Vriska Serket");
        this.words = this.addCheckbox("Syllables to '8'", "Vriska's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", true);
        this.vowels = this.addCheckbox("Random Vowel Swaps", "Vriska's arbitrary conversion of vowels to the number '8'.", false);
    }

    quirkify(): void {
        this.replaceStr("[Bb]", "8");
        this.replaceEmotes(":::$1$2");

        if (this.words.isChecked()) {
            this.replaceStr("ate", "8", false, true);
            this.replaceStr("ait", "8", false, true);
            this.replaceWord("great", "gr8", true);
        }

        if (this.vowels.isChecked()) {
            this.randReplace("[AaIiEeOoUu]", "8", 0.1);
        }
    }
}