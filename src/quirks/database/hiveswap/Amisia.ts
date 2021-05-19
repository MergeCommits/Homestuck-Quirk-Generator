import Quirk from "quirks/Quirk";

export default class Amisia extends Quirk {
    public constructor() {
        super("Amisia Erdehn");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("u", "uu");
    }
}