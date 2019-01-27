import { Quirk } from "../Quirk";

export class Vriska extends Quirk {
    words: HTMLInputElement;
    vowels: HTMLInputElement;

    constructor() {
        super("Vriska", "Serket");
        this.words = this.addCheckbox("Syllables to '8'", "Vriska's conversion of syllables that sound similar to '8' (such as ate) to the actual number.", false);
        this.vowels = this.addCheckbox("Random Vowel Replacement", "Vriska's arbitrary conversion of vowels to the number '8'.", false);
    }

    quirkify(): void {
        this.replaceStr("b", "8");
        this.replaceStr(":([\\)\\(D])", "::::$1");

        if (this.words.checked) {
            this.replaceStr("ate", "8");
            this.replaceWord("great", "gr8");
        }

        if (this.vowels.checked) {
            this.randReplace("[aieou]", "8", 0.1);
        }
    }
}