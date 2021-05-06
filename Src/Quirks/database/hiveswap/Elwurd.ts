import { Quirk } from "../../Quirk";


export class Elwurd extends Quirk {
    constructor() {
        super("?????? Elwurd", "vriska");
        this.setShortName("Elwurd");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("l", "L");
    }
}