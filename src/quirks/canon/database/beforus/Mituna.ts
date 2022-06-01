import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Mituna extends Quirk {
    private sub: Modifier;

    public constructor() {
        super("Mituna Captor");
        this.sub = this.addModifier("Random S/7 -> 7H", "Mituna's arbitrary conversion of 'S' and '7' to '7H'.", true);
    }

    protected quirkify(): void {
        this.upperCase();
        if (mods.sub) { this.randomReplace("[S7]", "7H", 0.1); }
        this.replaceString("A", "4");
        this.replaceString("B", "8");
        this.replaceString("E", "3");
        this.replaceString("I", "1");
        this.replaceString("O", "0");
        this.replaceString("S", "5");
        this.replaceString("T", "7");
    }
}