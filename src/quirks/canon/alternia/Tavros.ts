import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const tavrosColor = "#A15000";

export default class Tavros extends Quirk {
    public constructor() {
        super("Tavros Nitram", alterniaTag, tavrosColor);
    }

    protected override quirkify(): void {
        this.quirkText = tavrosify(this.quirkText);
        this.replaceEmotes("}$1$2");
    }
}

export function tavrosify(text: string): string {
    const punctuationRegex = /[,.?!]/g;
    const firstCharacterRegex = /(\s|^)(\w)/;

    return text
        .toUpperCase()
        .split(punctuationRegex)
        .map((str) =>
            str.replace(firstCharacterRegex, (chr) => chr.toLocaleLowerCase())
        )
        .join(",");
}
