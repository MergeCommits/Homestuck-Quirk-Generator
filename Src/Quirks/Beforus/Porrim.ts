import { Quirk } from "../Quirk";


export class Porrim extends Quirk {
    constructor() {
        super("Porrim Maryam", "kanaya");
    }

    quirkify(): void {
        this.replaceStr("([0Oo])", "$1+");
        this.replaceStr("plus", "+", false, true);
    }
}