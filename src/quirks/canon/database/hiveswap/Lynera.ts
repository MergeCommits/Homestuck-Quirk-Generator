import Quirk from "quirks/Quirk";

export default class Lynera extends Quirk {
    public constructor() {
        super("Lynera Skalbi");
    }

    protected quirkify(): void {
        this.prefix("-");
    }
}