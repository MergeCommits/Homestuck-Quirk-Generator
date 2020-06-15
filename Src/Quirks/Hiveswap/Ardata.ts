import { Quirk } from "../Quirk";


export class Ardata extends Quirk {
    constructor() {
        super("Ardata Carmia", "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("i", "iii");
    }
}