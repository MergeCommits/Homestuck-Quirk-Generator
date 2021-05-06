import { Quirk } from "../../Quirk";


export class Caliborn extends Quirk {
    constructor() {
        super("Caliborn");
    }

    quirkify(): void {
        this.upperCase();
        this.replaceString("U", "u");
    }
}