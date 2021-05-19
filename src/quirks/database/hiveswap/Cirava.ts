import Quirk from "quirks/Quirk";

export default class Cirava extends Quirk {
    public constructor() {
        super("Cirava Hermod");
    }

    protected quirkify(): void {
        this.lowerCase();
    }
}