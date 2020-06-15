import { Quirk } from "../Quirk";


export class Mallek extends Quirk {
    constructor() {
        super("Mallek Adalov", "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    }
}