import Quirk from "quirks/Quirk";

export default class Caliborn extends Quirk {
    public constructor() {
        super("Caliborn");
    }

    protected quirkify(): void {
        this.upperCase();
        this.lowerCase("U");
    }
}