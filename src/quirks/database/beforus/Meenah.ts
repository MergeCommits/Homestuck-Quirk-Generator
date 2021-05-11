import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Meenah extends Quirk {
    private puns: QuirkMutator;

    public constructor() {
        super("Meenah Peixes");
        this.puns = this.addMutator("Fish Puns", "Shellf-explanatory!", true);
    }

    protected quirkify(): void {
        if (this.puns.active) { this.applyFishPuns(); }
        this.replaceString("H", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}