import Quirk from "quirks/Quirk";


export default class Cronus extends Quirk {
    public constructor() {
        super("Cronus Ampora");
    }

    protected quirkify(): void {
        const reg = new RegExp("[wv]", "g");
        this.quirkText = this.quirkText.replace(reg, function() {
            if (Math.random() <= 0.5) {
                return "wv";
            }
            return "vw";
        });
        this.replaceString("B", "8");
    }
}