import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Daraya extends Quirk {
    emphasis: HTMLInputElement;

    constructor() {
        super("Daraya", "Jonjet", CAT_HIV, "bronya");
        this.emphasis = this.addCheckbox("Emphasis", "Surrounds Daraya's text with triple the amount of triangles for emphasis.");
    }

    quirkify(): void {
        this.lowerCase();
        if (!this.emphasis.checked) {
            this.prefix("▲");
            this.suffix("▼");
        } else {
            this.prefix("▲▲▲");
            this.suffix("▼▼▼");
        }
    }
}