import Quirk from "quirks/Quirk";

export default class Kurloz extends Quirk {
    public constructor() {
        super("Kurloz Makara");
    }

    protected quirkify(): void {
        this.upperCase();
    }
}