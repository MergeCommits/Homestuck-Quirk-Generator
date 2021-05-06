import { Quirk } from "../../Quirk";

export class Kanaya extends Quirk {
    constructor() {
        super("Kanaya Maryam");
    }

    quirkify(): void {
        // Any letter with whitespace preceding.
        let cap1 = "\\s";
        // Any letter at the start of the string.
        let cap2 = "^";
        // Any letter preceded by punctuation (except ' and `).
        let cap3 = "[.,!?\\/\\\|]";

        // Any of the above succeeded by a ' or `.
        // All of this is to distinguish between a word wrapped in single quotes and a contraction.
        let cap4 = cap1 + "['`]";
        let cap5 = cap2 + "['`]";
        let cap6 = cap3 + "['`]";

        cap1 += "\\w";
        cap2 += "\\w";
        cap3 += "\\w";
        cap4 += "\\w";
        cap5 += "\\w";
        cap6 += "\\w";

        this.upperCase(`(${cap1}|${cap2}|${cap3}|${cap4}|${cap5}|${cap6})`);
    }
}