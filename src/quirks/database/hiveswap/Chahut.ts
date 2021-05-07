import Quirk from "quirks/Quirk";


export default class Chahut extends Quirk {
    public constructor() {
        super("Chahut Maenad");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("t", "T");
    }
}