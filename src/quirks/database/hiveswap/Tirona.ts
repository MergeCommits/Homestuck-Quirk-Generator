import Quirk from "quirks/Quirk";

export default class Tirona extends Quirk {
    public constructor() {
        super("Tirona Kasund");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("e", "33");
    }
}