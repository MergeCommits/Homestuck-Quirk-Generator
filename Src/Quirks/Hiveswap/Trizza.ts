import { Quirk } from "../Quirk";


export class Trizza extends Quirk {
    constructor() {
        super("Trizza Tethis");
    }

    quirkify(): void {
        this.replaceStr("[Ww]", "ψ");
    }
}