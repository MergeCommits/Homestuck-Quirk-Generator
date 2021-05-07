import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Feferi extends Quirk {
    private puns: QuirkMutator;

    public constructor() {
        super("Feferi Peixes");
        this.puns = this.addMutator("Fish Puns", "Shellf-explanatory!", true);
    }

    protected quirkify(): void {
        if (this.puns.active) { this.applyFishPuns(); }
        this.replaceString("[Hh]", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}