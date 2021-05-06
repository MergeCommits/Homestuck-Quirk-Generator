import { Quirk } from "../../Quirk";


export class Calliope extends Quirk {
    constructor() {
        super("Calliope");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("u", "U");
    }
}