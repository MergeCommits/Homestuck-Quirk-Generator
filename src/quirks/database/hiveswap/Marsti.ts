import Quirk from "quirks/Quirk";


export default class Marsti extends Quirk {
    public constructor() {
        super("Marsti Houtek");
    }

    protected quirkify(): void {
        this.suffix(" -_-");
    }
}