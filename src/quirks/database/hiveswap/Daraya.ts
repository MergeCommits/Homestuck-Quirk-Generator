import { Quirk } from "../../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Daraya extends Quirk {
    emphasis: OptionalCheckbox;

    constructor() {
        super("Daraya Jonjet", "bronya");
        this.emphasis = this.addMutator("Emphasis", "Surrounds Daraya's text with triple the amount of triangles for emphasis.");
    }

    quirkify(): void {
        this.lowerCase();
        if (!this.emphasis.isChecked()) {
            this.prefix("▲");
            this.suffix("▼");
        } else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    }
}