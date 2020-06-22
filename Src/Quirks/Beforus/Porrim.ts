import { Quirk } from "../Quirk";


export class Porrim extends Quirk {
    constructor() {
        super("Porrim Maryam", "kanaya");
    }

    quirkify(): void {
        this.replaceString("([0Oo])", "$1+");
        this.replaceCaseInsensitive("plus", "+");
    }
}