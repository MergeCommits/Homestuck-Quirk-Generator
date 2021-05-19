import Quirk from "quirks/Quirk";

export default class Mallek extends Quirk {
    public constructor() {
        super("Mallek Adalov");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("\\.", ";");
        this.replaceWord("is not", "!=");
        this.replaceWord("is", "=");
    }
}