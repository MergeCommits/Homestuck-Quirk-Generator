import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Daraya extends Quirk {
    private emphasis: QuirkMutator;

    public constructor() {
        super("Daraya Jonjet");
        this.emphasis = this.addMutator("Emphasis", "Surrounds Daraya's text with triple the amount of triangles for emphasis.", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (!this.emphasis.active) {
            this.prefix("▲");
            this.suffix("▼");
        } else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    }
}