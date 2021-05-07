import Quirk from "quirks/Quirk";


export default class Azdaja extends Quirk {
    public constructor() {
        super("Azdaja Knelax");
    }

    protected quirkify(): void {
        this.prefix("||| ");
        this.suffix(" |||");
    }
}