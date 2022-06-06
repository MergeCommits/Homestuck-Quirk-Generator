import Quirk from "quirks/Quirk";
import { cherubsTag } from "quirks/canon/Tags";

export default class Caliborn extends Quirk {
    public constructor() {
        super("Caliborn", cherubsTag, "#323232");
    }

    protected quirkify(): void {
        this.upperCase();
        this.lowerCase("U");
    }
}