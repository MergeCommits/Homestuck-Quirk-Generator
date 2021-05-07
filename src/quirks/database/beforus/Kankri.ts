import Quirk from "quirks/Quirk";


export default class Kankri extends Quirk {
    public constructor() {
        super("Kankri Vantas");
    }

    protected quirkify(): void {
        this.replaceString("[Bb]", "6");
        this.replaceString("[Oo]", "9");
    }
}