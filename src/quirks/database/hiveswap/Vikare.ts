import { Quirk } from "../../Quirk";


export class Vikare extends Quirk {
    constructor() {
        super("Vikare Ratite", "skylla");
    }

    quirkify(): void {
        this.prefix("~");
        this.suffix("~");
    }
}