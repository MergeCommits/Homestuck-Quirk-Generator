import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Horuss extends Quirk {
    private censor: Modifier;

    public constructor() {
        super("Horuss Zahhak");
        this.censor = this.addModifier("Censor", "Censors f*cking swear words.", false);
    }

    protected quirkify(): void {
        if (this.censor.active) { this.censorSwears(true); }
        this.replaceString("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }
}