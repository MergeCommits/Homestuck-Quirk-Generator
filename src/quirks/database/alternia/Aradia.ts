import Quirk from "@/quirks/Quirk";
import QuirkMutator from "@/quirks/QuirkMutator";

export default class Aradia extends Quirk {
    private deadMutation: QuirkMutator;

    public constructor() {
        super("Aradia Medigo");
        this.deadMutation = this.addMutator("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    protected quirkify(): void {
        this.lowerCase();
        if (this.deadMutation.active) {
            this.replaceString("o", "0");

            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    }
}