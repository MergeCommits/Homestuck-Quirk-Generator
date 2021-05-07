import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Meulin extends Quirk {
    puns: QuirkMutator;

    public constructor() {
        super("Meulin Leijon");
        this.puns = this.addMutator("Cat Puns", "Self-expurrnatory!", true);
    }

    protected quirkify(): void {
        this.upperCase();
        if (this.puns.active) { this.applyCatPuns(); }
        this.replaceString("EE", "33");
        this.replaceString("OMG", "MOG");
    }
}