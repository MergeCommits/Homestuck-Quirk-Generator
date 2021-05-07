import Quirk from "quirks/Quirk";


export default class Vikare extends Quirk {
    public constructor() {
        super("Vikare Ratite");
    }

    protected quirkify(): void {
        this.prefix("~");
        this.suffix("~");
    }
}