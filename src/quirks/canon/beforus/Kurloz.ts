import { gamezeeColor } from "quirks/canon/alternia/Gamzee";
import { beforusTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Kurloz extends Quirk {
    public constructor() {
        super("Kurloz Makara", beforusTag, gamezeeColor);
    }

    protected quirkify(): void {
        this.upperCase();
    }
}
