import { gamezeeColor } from "quirks/canon/alternia/Gamzee";
import Quirk from "quirks/Quirk";
import { beforusTag } from "quirks/canon/Tags";

export default class Kurloz extends Quirk {
    public constructor() {
        super("Kurloz Makara", beforusTag, gamezeeColor);
    }

    protected quirkify(): void {
        this.upperCase();
    }
}