import { Quirk } from "../../Quirk";


export class Chixie extends Quirk {
    constructor() {
        super("Chixie Roixmr", "skylla");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", " /");
    }
}