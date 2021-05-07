import Quirk from "quirks/Quirk";


export default class Trizza extends Quirk {
    public constructor() {
        super("Trizza Tethis");
    }

    protected quirkify(): void {
        this.replaceString("[Ww]", "ψ");
    }
}