import Quirk from "../../Quirk";

export default class Tavros extends Quirk {
    public constructor() {
        super("Tavros Nitram");
    }

    protected  quirkify(): void {
        this.upperCase();

        const arr: string[] = this.quirkText.split(/[,.?!]/g);
        for (let i = 0; i < arr.length; i++) {
            // Only replace the first instance of a match.
            arr[i] = arr[i].replace(/(\s|^)(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
        }

        this.quirkText = arr.join(",");
        this.replaceEmotes("}$1$2");
    }
}