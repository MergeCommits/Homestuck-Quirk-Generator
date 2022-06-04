import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export const gamezeeColor = "#5700B0";

export default class Gamzee extends Quirk {
    public constructor() {
        super("Gamzee Makara", alterniaTag, gamezeeColor);
    }

    protected quirkify(): void {
        this.applyAlternatingCaps();
        this.replaceEmotes("$1o$2");
    }

    private applyAlternatingCaps(): void {
        let result = "";
        let cap = true;
        for (let i = 0; i < this.quirkText.length; i++) {
            const c = this.quirkText.charAt(i);
            if (c.match(/\w/i) !== null) {
                result += cap ? c.toLocaleUpperCase() : c.toLocaleLowerCase();
                cap = !cap;
            } else {
                result += c;
            }
        }

        this.quirkText = result;
    }
}