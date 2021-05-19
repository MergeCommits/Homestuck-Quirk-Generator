import Quirk from "quirks/Quirk";

export default class Fozzer extends Quirk {
    public constructor() {
        super("Fozzer Velyes");
    }

    protected quirkify(): void {
        this.replaceString("\\s", "_");
    }
}