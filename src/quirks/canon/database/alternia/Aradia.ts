import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";

export default class Aradia extends Quirk {
    private dead: Modifier;

    public constructor() {
        super("Aradia Medigo");
        this.dead = this.addModifier("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (this.dead.active) {
            this.replaceString("o", "0");

            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    }
}