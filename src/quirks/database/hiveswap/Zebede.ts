import Quirk from "quirks/Quirk";

export default class Zebede extends Quirk {
    public constructor() {
        super("Zebede Tongva");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("s\\b", "z");
        this.replaceEmotes("z$1$2");
    }
}