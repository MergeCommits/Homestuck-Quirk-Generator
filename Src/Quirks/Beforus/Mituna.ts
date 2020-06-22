import { Quirk } from "../Quirk";
import { OptionalCheckbox } from "../OptionalCheckbox";


export class Mituna extends Quirk {
    sub: OptionalCheckbox;

    constructor() {
        super("Mituna Captor", "sollux");
        this.sub = this.addCheckbox("Random S/7 -> 7H", "Mituna's arbitrary conversion of 'S' and '7' to '7H'.", true)
    }

    quirkify(): void {
        this.upperCase();
        if (this.sub.isChecked()) { this.randomReplace("[S7]", "7H", 0.1); }
        this.replaceString("A", "4");
        this.replaceString("B", "8");
        this.replaceString("E", "3");
        this.replaceString("I", "1");
        this.replaceString("O", "0");
        this.replaceString("S", "5");
        this.replaceString("T", "7");
    }
}