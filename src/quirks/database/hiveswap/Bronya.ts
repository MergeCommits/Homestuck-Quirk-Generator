import Quirk from "quirks/Quirk";

export default class Bronya extends Quirk {
    public constructor() {
        super("Bronya Ursama");
    }

    protected quirkify(): void {
        this.prefix("vV ");
        this.suffix(" Vv");
    }
}