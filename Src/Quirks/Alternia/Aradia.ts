import { Quirk } from "../Quirk";
import { Category } from "../../Categories/Category";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Aradia extends Quirk {
    dead: OptionalCheckbox;

    constructor() {
        super("Aradia Medigo");
        this.dead = this.addCheckbox("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.dead.isChecked()) {
            this.replaceString("o", "0");

            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    }
}