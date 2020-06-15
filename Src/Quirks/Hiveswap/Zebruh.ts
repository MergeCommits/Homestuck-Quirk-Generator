import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Zebruh extends Quirk {
    black: HTMLInputElement;
    concupiscent: HTMLInputElement;

    constructor() {
        super("Zebruh Codakk", CAT_HIV, "amisia");
        this.black = this.addCheckbox("Black Romance", "Replaces the quadrant in Zebruh's quirk with the black romance variation.", false);
        this.concupiscent = this.addCheckbox("Concupiscent", "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.", false);
    }

    quirkify(): void {
        let wrapper: string = "♢";
        if (this.black.checked && !this.concupiscent.checked) {
            wrapper = "♧";
        } else if (!this.black.checked && this.concupiscent.checked) {
            wrapper = "♡";
        } else if (this.black.checked && this.concupiscent.checked) {
            wrapper = "♤";
        }

        this.prefix(wrapper);
        this.suffix(wrapper);
    }
}