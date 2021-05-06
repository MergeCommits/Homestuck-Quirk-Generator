import { Quirk } from "../../Quirk";


export class Bronya extends Quirk {
    constructor() {
        super("Bronya Ursama");
    }

    quirkify(): void {
        this.prefix("vV ");
        this.suffix(" Vv");
    }
}