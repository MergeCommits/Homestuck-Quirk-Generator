import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";

export class Sollux extends Quirk {
    dead: OptionalCheckbox;

    constructor() {
        super("Sollux Captor");
        this.dead = this.addMutator("Dead Quirk", "Sollux's typing quirk used when he is dead (o --> 0).");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
        this.replaceWord("(too|to)", "two");

        if (this.dead.isChecked()) {
            this.replaceString("o", "0");
        }
    }
}