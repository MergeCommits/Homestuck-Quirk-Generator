import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Kanaya extends AlterniaQuirk {
    public constructor() {
        super("Kanaya Maryam");
    }

    protected quirkify(): void {
        const contractionMarks = "(\\w)['`](\\w)";
        this.replaceString(contractionMarks, "$1$2");

        const firstLetterOfWord = "\\b\\w";
        this.upperCase(firstLetterOfWord);
    }
}