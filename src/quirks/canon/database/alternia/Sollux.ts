import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Sollux extends Quirk {
    private dead: Modifier;

    public constructor() {
        super("Sollux Captor");
        this.dead = this.addModifier("Dead Quirk", "Sollux's typing quirk used when he is dead (o --> 0).", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
        this.replaceWord("(too|to)", "two");

        if (this.dead.active) {
            this.replaceString("o", "0");
        }
    }
}