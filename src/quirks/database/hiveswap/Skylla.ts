import Quirk from "quirks/Quirk";


export default class Skylla extends Quirk {
    public constructor() {
        super("Skylla Koriga");
    }

    protected quirkify(): void {
        this.replaceString("y", "yy");
        this.replaceString("Y", "YY");
    }
}