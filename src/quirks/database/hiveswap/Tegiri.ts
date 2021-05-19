import Quirk from "quirks/Quirk";

export default class Tegiri extends Quirk {
    public constructor() {
        super("Tegiri Kalbur");
    }

    protected quirkify(): void {
        this.replaceString("[Ll]", "/");
    }
}