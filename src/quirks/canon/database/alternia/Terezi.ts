import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export const tereziColor = "#008282";

export default class Terezi extends Quirk {
    public constructor() {
        super("Terezi Pyrope", alterniaTag, tereziColor);
    }

    protected quirkify(): void {
        this.upperCase();
        this.replaceEmotes(">$1]");
        this.replaceString("A", "4");
        this.replaceString("I", "1");
        this.replaceString("E", "3");
    }
}