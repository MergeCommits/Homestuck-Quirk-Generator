import Quirk from "quirks/Quirk";

export default class Tagora extends Quirk {
    public constructor() {
        super("Tagora Gorjek");
    }

    protected quirkify(): void {
        this.suffix(" *_________");
    }
}