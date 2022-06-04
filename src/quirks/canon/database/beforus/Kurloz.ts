import { gamezeeColor } from "quirks/canon/database/alternia/Gamzee";
import Quirk from "quirks/Quirk";
import { beforusTag } from "quirks/canon/database/Tags";

export default class Kurloz extends Quirk {
    public constructor() {
        super("Kurloz Makara", beforusTag, gamezeeColor);
    }

    protected quirkify(): void {
        this.upperCase();
    }
}