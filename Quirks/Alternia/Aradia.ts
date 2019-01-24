import { Quirk } from "../Quirk";

export class Aradia extends Quirk {
    constructor() {
        super("Aradia", "Medigo");
    }

    quirkify(): void {
        console.log(`${this.lastName}, ${this.firstName} doing work...`);
    }
}