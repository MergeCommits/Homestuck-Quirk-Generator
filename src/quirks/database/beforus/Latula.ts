import Quirk from "quirks/Quirk";

export default class Latula extends Quirk {
    public constructor() {
        super("Latula Pyrope");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("a", "4");
        this.replaceString("i", "1");
        this.replaceString("e", "3");
    }
}