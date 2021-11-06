import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Nepeta extends Quirk {
    private puns: Modifier;

    public constructor() {
        super("Nepeta Leijon");
        this.puns = this.addModifier("Cat Puns", "Self-expurrnatory!", true);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (this.puns.active) { this.applyCatPuns(); }
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    }
}