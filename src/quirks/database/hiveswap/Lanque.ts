import Quirk from "quirks/Quirk";


export default class Lanque extends Quirk {
    public constructor() {
        super("Lanque Bombyx");
    }

    protected quirkify(): void {
        this.replaceString("w", "W");
        this.replaceString("v", "V");
    }
}