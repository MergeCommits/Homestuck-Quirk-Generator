import Quirk from "quirks/Quirk";
import { cherubsTag } from "quirks/canon/Tags";

export default class Calliope extends Quirk {
    public constructor() {
        super("Calliope", cherubsTag, "#929292");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.upperCase("u");
    }
}