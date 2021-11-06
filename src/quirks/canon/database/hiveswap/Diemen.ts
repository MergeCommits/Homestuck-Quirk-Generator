import Quirk from "quirks/Quirk";

export default class Diemen extends Quirk {
    public constructor() {
        super("Diemen Xicali");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    }
}