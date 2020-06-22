import { Quirk } from "../Quirk";


export class Mallek extends Quirk {
    constructor() {
        super("Mallek Adalov", "vriska");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    }
}