import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Zebruh extends Quirk {
    private black: Modifier;
    private concupiscent: Modifier;

    public constructor() {
        super("Zebruh Codakk");
        this.black = this.addModifier("Black Romance", "Replaces the quadrant in Zebruh's quirk with the black romance variation.", false);
        this.concupiscent = this.addModifier("Concupiscent", "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.", false);
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