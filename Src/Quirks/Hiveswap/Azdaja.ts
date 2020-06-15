import { Quirk } from "../Quirk";


export class Azdaja extends Quirk {
    constructor() {
        super("Azdaja Knelax", "kuprum");
    }

    quirkify(): void {
        this.prefix("||| ");
        this.suffix(" |||");
    }
}