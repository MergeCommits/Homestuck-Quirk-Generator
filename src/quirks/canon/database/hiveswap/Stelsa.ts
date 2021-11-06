import Quirk from "quirks/Quirk";

export default class Stelsa extends Quirk {
    public constructor() {
        super("Stelsa Sezyat");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}