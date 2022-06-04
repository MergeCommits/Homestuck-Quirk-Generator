import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/database/Tags";

export default class Karkat extends Quirk {
    public constructor() {
        super("Karkat Vantas", alterniaTag, "#626262");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}