import Quirk from "quirks/Quirk";

export default class Karkat extends Quirk {
    public constructor() {
        super("Karkat Vantas");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}