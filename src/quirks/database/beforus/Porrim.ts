import Quirk from "quirks/Quirk";


export default class Porrim extends Quirk {
    public constructor() {
        super("Porrim Maryam");
    }

    protected quirkify(): void {
        this.replaceString("([0Oo])", "$1+");
        this.replaceCaseInsensitive("plus", "+");
    }
}