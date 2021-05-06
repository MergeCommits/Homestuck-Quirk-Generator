import { Quirk } from "../../Quirk";


export class Lynera extends Quirk {
    constructor() {
        super("Lynera Skalbi", "bronya");
    }

    quirkify(): void {
        this.prefix("-");
    }
}