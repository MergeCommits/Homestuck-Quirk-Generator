import { cherubsTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Calliope extends Quirk {
    public constructor() {
        super("Calliope", cherubsTag, "#929292");
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.upperCase("u");
    }
}
