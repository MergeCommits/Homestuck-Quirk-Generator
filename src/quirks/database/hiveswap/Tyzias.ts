import Quirk from "quirks/Quirk";

export default class Tyzias extends Quirk {
    public constructor() {
        super("Tyzias Entykk");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("m", "mmmm");
        this.replaceString("w", "wwww");
    }
}