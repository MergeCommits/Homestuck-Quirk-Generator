import { Quirk } from "../../Quirk";


export class Tagora extends Quirk {
    constructor() {
        super("Tagora Gorjek");
    }

    quirkify(): void {
        this.suffix(" *_________");
    }
}