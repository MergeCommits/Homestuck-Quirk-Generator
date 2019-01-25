import { Quirk } from "../Quirk";

export class Tavros extends Quirk {
    constructor() {
        super("Tavros", "Nitram");
    }

    quirkify(): void {
        this.trollEmotes();
        this.upperCase();

        let arr: string[] = this.input.split(/[,\.\?!]/g);
        for (let i = 0; i < arr.length; i++) {
            // Only replace the first instance of a match.
            arr[i] = arr[i].replace(/\b(\w)/, function(chr: string) { return chr.toLocaleLowerCase(); });
        }

        this.input = arr.join(",");
    }
}