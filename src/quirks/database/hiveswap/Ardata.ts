import Quirk from "quirks/Quirk";


export default class Ardata extends Quirk {
    public constructor() {
        super("Ardata Carmia");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("i", "iii");
    }
}