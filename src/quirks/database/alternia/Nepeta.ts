import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Nepeta extends Quirk {
    private puns: QuirkMutator;

    public constructor() {
        super("Nepeta Leijon");
        this.puns = this.addMutator("Cat Puns", "Self-expurrnatory!", true);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (this.puns.active) { this.applyCatPuns(); }
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    }
}