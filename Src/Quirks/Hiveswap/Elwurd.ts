import { Quirk } from "../Quirk";


export class Elwurd extends Quirk {
    constructor() {
        super("?????? Elwurd", "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("l", "L");
    }
}