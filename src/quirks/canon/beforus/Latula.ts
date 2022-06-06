import Quirk from "quirks/Quirk";
import { tereziColor } from "quirks/canon/alternia/Terezi";
import { beforusTag } from "quirks/canon/Tags";

export default class Latula extends Quirk {
    public constructor() {
        super("Latula Pyrope", beforusTag, tereziColor);
    }

    protected quirkify(): void {
        this.replaceEmotes(">$1]");
        this.replaceWordMatchCase("girl", "grl");

        this.replaceCaseInsensitive("a", "4");
        this.replaceCaseInsensitive("i", "1");
        this.replaceCaseInsensitive("e", "3");
    }
}