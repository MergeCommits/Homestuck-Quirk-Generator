import { Quirk } from "../Quirk";


export class Nihkee extends Quirk {
    constructor() {
        super("Nihkee Moolah", "amisia");
    }

    quirkify(): void {
        this.prefix("[()] ");
    }
}