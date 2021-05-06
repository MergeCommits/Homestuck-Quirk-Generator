import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Zebruh extends Quirk {
    black: OptionalCheckbox;
    concupiscent: OptionalCheckbox;

    constructor() {
        super("Zebruh Codakk", "amisia");
        this.black = this.addMutator("Black Romance", "Replaces the quadrant in Zebruh's quirk with the black romance variation.", false);
        this.concupiscent = this.addMutator("Concupiscent", "Replaces the quadrant in Zebruh's quirk with the concupiscent variation.", false);
    }

    quirkify(): void {
        let wrapper: string = "♢";
        if (this.black.isChecked() && !this.concupiscent.isChecked()) {
            wrapper = "♧";
        } else if (!this.black.isChecked() && this.concupiscent.isChecked()) {
            wrapper = "♡";
        } else if (this.black.isChecked() && this.concupiscent.isChecked()) {
            wrapper = "♤";
        }

        this.prefix(wrapper);
        this.suffix(wrapper);
    }
}