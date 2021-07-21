import Quirk from "quirks/Quirk";

export default class Baizli extends Quirk {
    public constructor() {
        super("Baizli Soleil");
    }

    protected quirkify(): void {
        this.lowerCase();
    }
}