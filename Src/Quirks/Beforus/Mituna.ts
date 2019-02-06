import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Mituna extends Quirk {
    sub: HTMLInputElement;

    constructor() {
        super("Mituna", "Captor", CAT_BEF, "sollux");
        this.sub = this.addCheckbox("Random S -> 7/7H", "Mituna's arbitrary conversion of 'S' and '7' to '7H'.", true)
    }

    quirkify(): void {
        this.upperCase();
        if (this.sub.checked) { this.randReplace("[S7]", "7H", 0.1); }
        this.replaceStr("A", "4");
        this.replaceStr("B", "8");
        this.replaceStr("E", "3");
        this.replaceStr("I", "1");
        this.replaceStr("O", "0");
        this.replaceStr("S", "5");
        this.replaceStr("T", "7");
    }
}