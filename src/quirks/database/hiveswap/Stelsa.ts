import Quirk from "quirks/Quirk";

export default class Stelsa extends Quirk {
    public constructor() {
        super("Stelsa Lamati");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}