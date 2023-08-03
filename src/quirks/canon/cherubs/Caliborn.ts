import { cherubsTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Caliborn extends Quirk {
    public constructor() {
        super("Caliborn", cherubsTag, "#323232");
    }

    protected override quirkify(): void {
        this.upperCase();
        this.lowerCase("U");
    }
}
