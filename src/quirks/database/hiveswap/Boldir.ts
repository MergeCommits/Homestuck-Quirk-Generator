import Quirk from "quirks/Quirk";


export default class Boldir extends Quirk {
    public constructor() {
        super("Boldir Lamati");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.prefix("(");
        this.suffix(")");
    }
}