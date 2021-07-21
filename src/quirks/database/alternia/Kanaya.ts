import Quirk from "quirks/Quirk";

export default class Kanaya extends Quirk {
    public constructor() {
        super("Kanaya Maryam");
    }

    protected quirkify(): void {
        const contractionMarks = "(\\b)['`,](\\b)";
        this.replaceString(contractionMarks, "$1$2");

        const firstLetterOfWords = "\\b\\w";
        this.upperCase(firstLetterOfWords);
    }
}