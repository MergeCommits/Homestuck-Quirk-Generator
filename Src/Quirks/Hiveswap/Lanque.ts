import { Quirk } from "../Quirk";


export class Lanque extends Quirk {
    constructor() {
        super("Lanque Bombyx", "bronya");
    }

    quirkify(): void {
        this.replaceStr("w", "W");
        this.replaceStr("v", "V");
    }
}