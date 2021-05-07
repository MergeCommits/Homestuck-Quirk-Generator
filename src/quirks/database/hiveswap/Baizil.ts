import Quirk from "quirks/Quirk";


export default class Baisil extends Quirk {
    public constructor() {
        super("Baisil Soleil");
    }

    protected quirkify(): void {
        this.lowerCase();
    }
}