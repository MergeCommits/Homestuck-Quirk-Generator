import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/Tags";

export const kanayaColor = "#008141";

export default class Kanaya extends Quirk {
    public constructor() {
        super("Kanaya Maryam", alterniaTag, kanayaColor);
    }

    protected quirkify(): void {
        const contractionMarks = "(\\w)['`](\\w)";
        this.replaceString(contractionMarks, "$1$2");

        const firstLetterOfWord = "\\b\\w";
        this.upperCase(firstLetterOfWord);
    }
}