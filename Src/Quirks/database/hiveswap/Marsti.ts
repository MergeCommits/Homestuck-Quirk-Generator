import { Quirk } from "../../Quirk";


export class Marsti extends Quirk {
    constructor() {
        super("Marsti Houtek", "diemen");
    }

    quirkify(): void {
        this.suffix(" -_-");
    }
}