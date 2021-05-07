import Quirk from "quirks/Quirk";


export default class Chixie extends Quirk {
    public constructor() {
        super("Chixie Roixmr");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", " /");
    }
}