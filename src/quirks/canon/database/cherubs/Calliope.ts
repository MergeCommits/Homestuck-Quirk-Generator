import Quirk from "quirks/Quirk";

export default class Calliope extends Quirk {
    public constructor() {
        super("Calliope");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.upperCase("u");
    }
}