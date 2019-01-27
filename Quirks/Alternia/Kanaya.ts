import { Quirk } from "../Quirk";

export class Kanaya extends Quirk {
    constructor() {
        super("Kanaya", "Maryam");
    }

    quirkify(): void {
        this.changeCase("\\b\\w", true);

        // For contractions (you're) we need to lowercase those.
        let reg: RegExp = new RegExp("\\w[`']\\w", "g");
        this.input = this.input.replace(reg, function(match) {
            return match.substr(0, match.length - 1) + match.charAt(match.length - 1).toLocaleLowerCase();
        });
    }
}