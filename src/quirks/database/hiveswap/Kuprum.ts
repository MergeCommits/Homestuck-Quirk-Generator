import Quirk from "quirks/Quirk";

export default class Kuprum extends Quirk {
    public constructor() {
        super("Kuprum Maxlol");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.upperCase("\\bl+o[ol]*l\\b");
        this.prefix(">");
    }
}