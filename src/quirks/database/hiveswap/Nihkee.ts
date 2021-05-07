import Quirk from "quirks/Quirk";


export default class Nihkee extends Quirk {
    public constructor() {
        super("Nihkee Moolah");
    }

    protected quirkify(): void {
        this.prefix("[()] ");
    }
}