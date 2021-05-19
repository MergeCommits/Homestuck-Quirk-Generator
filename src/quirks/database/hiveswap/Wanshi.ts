import Quirk from "quirks/Quirk";

export default class Wanshi extends Quirk {
    public constructor() {
        super("Wanshi Adyata");
    }

    protected quirkify(): void {
        this.replaceString("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    }
}