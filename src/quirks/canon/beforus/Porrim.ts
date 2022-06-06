import Quirk from "quirks/Quirk";
import { kanayaColor } from "quirks/canon/alternia/Kanaya";
import { beforusTag } from "quirks/canon/Tags";

export default class Porrim extends Quirk {
    public constructor() {
        super("Porrim Maryam", beforusTag, kanayaColor);
    }

    protected quirkify(): void {
        this.replaceString("([0Oo])", "$1+");
        this.replaceCaseInsensitive("plus", "+");
    }
}