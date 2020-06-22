import { Quirk } from "../Quirk";


export class Lanque extends Quirk {
    constructor() {
        super("Lanque Bombyx", "bronya");
    }

    quirkify(): void {
        this.replaceString("w", "W");
        this.replaceString("v", "V");
    }
}