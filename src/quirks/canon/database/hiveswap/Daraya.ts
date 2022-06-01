import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Daraya extends Quirk {
    private emphasis: Modifier;

    public constructor() {
        super("Daraya Jonjet");
        this.emphasis = this.addModifier("Emphasis", "Surrounds Daraya's text with triple the amount of triangles for emphasis.", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (!mods.emphasis) {
            this.prefix("▲");
            this.suffix("▼");
        } else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    }
}