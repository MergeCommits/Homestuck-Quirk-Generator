import Quirk from "quirks/Quirk";
import { beforusTag } from "quirks/canon/database/Tags";

export default class Kankri extends Quirk {
    public constructor() {
        super("Kankri Vantas", beforusTag, "#FF0000");
    }

    protected quirkify(): void {
        this.replaceString("[Bb]", "6");
        this.replaceString("[Oo]", "9");
    }
}