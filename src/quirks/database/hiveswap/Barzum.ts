import Quirk from "quirks/Quirk";

export default class Barzum extends Quirk {
    public constructor() {
        super("Barzum Soleil");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}