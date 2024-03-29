import { tereziColor } from "quirks/canon/alternia/Terezi";
import { beforusTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Latula extends Quirk {
    public constructor() {
        super("Latula Pyrope", beforusTag, tereziColor);
    }

    protected override quirkify(): void {
        this.replaceEmotes(">$1]");
        this.replaceWordMatchCase("girl", "grl");

        this.replaceCaseInsensitive("a", "4");
        this.replaceCaseInsensitive("i", "1");
        this.replaceCaseInsensitive("e", "3");
    }
}
