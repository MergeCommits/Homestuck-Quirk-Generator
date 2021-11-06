import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Feferi extends Quirk {
    private puns: Modifier;

    public constructor() {
        super("Feferi Peixes");
        this.puns = this.addModifier("Fish Puns", "Shellf-explanatory!", true);
    }

    protected quirkify(): void {
        if (this.puns.active) { this.applyFishPuns(); }
        this.replaceString("[Hh]", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}