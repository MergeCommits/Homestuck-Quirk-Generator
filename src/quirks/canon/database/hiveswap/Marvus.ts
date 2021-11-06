import Quirk from "quirks/Quirk";

export default class Marvus extends Quirk {
    public constructor() {
        super("Marvus Xoloto");
    }

    protected quirkify(): void {
        this.replaceEmotes("$1o$2");
    }
}