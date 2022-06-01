import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Rufioh extends Quirk {
    private censor: Modifier;

    public constructor() {
        super("Rufioh Nitram");
        this.censor = this.addModifier("Censor", "Censors f*cking swear words.", false);
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceWord("girl(s|)", "doll$1");

        if (mods.censor) { this.censorSwears(); }
        this.replaceString("i", "1");
        this.replaceEmotes("}$1$2");
    }
}