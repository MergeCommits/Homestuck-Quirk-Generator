import { Quirk } from "../Quirk";

export class Tavros extends Quirk {
    constructor() {
        super("Tavros Nitram");
    }

    quirkify(): void {
        this.upperCase();

        let arr: string[] = this.input.split(/[,.?!]/g);
        for (let i = 0; i < arr.length; i++) {
            // Only replace the first instance of a match.
            arr[i] = arr[i].replace(/(\s|^)(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
        }

        this.input = arr.join(",");
        this.replaceEmotes("}$1$2");
    }
}