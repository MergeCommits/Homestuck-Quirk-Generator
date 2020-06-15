import { Quirk } from "../Quirk";


export class Diemen extends Quirk {
    constructor() {
        super("Diemen Xicali");
    }

    quirkify(): void {
        this.lowerCase();
        this.prefix("(| ");
        this.suffix(" |)");
    }
}