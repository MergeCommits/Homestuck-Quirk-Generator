import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Horuss extends Quirk {
    censor: QuirkMutator;

    public constructor() {
        super("Horuss Zahhak");
        this.censor = this.addMutator("Censor", "Censors f*cking swear words.", false);
    }

    protected quirkify(): void {
        if (this.censor.active) { this.censorSwears(true); }
        this.replaceString("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }
}