import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";


export default class Rufioh extends Quirk {
    private censor: QuirkMutator;

    public constructor() {
        super("Rufioh Nitram");
        this.censor = this.addMutator("Censor", "Censors f*cking swear words.", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (this.censor.active) { this.censorSwears(); }
        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    }
}