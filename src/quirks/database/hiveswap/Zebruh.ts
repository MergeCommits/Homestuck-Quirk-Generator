import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Zebruh extends Quirk {
    private black: QuirkMutator;
    private concupiscent: QuirkMutator;

    public constructor() {
        super("Zebruh Codakk");
        this.black = this.addMutator("Black Romance", "Replaces the quadrant in Zebruh's quirk with the black romance variation.", false);
        this.concupiscent = this.addMutator("Concupiscent", "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.", false);
    }

    protected quirkify(): void {
        let wrapper = "♢";
        if (this.black.active && !this.concupiscent.active) {
            wrapper = "♧";
        } else if (!this.black.active && this.concupiscent.active) {
            wrapper = "♡";
        } else if (this.black.active && this.concupiscent.active) {
            wrapper = "♤";
        }

        this.prefix(wrapper);
        this.suffix(wrapper);
    }
}