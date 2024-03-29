import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const kanayaColor = "#008141";

export default class Kanaya extends Quirk {
    public constructor() {
        super("Kanaya Maryam", alterniaTag, kanayaColor);
    }

    protected override quirkify(): void {
        const contractionMarks = "(\\w)['`](\\w)";
        this.replaceString(contractionMarks, "$1$2");

        const firstLetterOfWord = "\\b\\w";
        this.upperCase(firstLetterOfWord);
    }
}
