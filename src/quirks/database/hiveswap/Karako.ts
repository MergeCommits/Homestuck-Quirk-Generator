import Quirk from "quirks/Quirk";


export default class Karako extends Quirk {
    public constructor() {
        super("Karako Pierot");
    }

    protected quirkify(): void {
        this.replaceMatchCase("\\w+", "honk");
    }
}