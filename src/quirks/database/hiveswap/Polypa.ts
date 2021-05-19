import Quirk from "quirks/Quirk";

export default class Polypa extends Quirk {
    public constructor() {
        super("Polypa Goezee");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", " *");
        this.suffix(" *|");
    }
}