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
        if (this.sub.isChecked()) { this.randReplace("[S7]", "7H", 0.1); }
        this.replaceStr("A", "4");
        this.replaceStr("B", "8");
        this.replaceStr("E", "3");
        this.replaceStr("I", "1");
        this.replaceStr("O", "0");
        this.replaceStr("S", "5");
        this.replaceStr("T", "7");
    }
}