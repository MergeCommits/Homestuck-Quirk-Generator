import Quirk from "quirks/Quirk";


export default class Elwurd extends Quirk {
    public constructor() {
        super("?????? Elwurd");
        // this.setShortName("Elwurd"); // TODO: Figure out.
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("l", "L");
    }
}