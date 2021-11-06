import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Meenah extends Quirk {
    private puns: Modifier;

    public constructor() {
        super("Meenah Peixes");
        this.puns = this.addModifier("Fish Puns", "Shellf-explanatory!", true);
    }

    protected quirkify(): void {
        if (this.puns.active) { this.applyFishPuns(); }
        this.replaceString("H", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }
}