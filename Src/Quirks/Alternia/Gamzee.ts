import { Quirk } from "../Quirk";

export class Gamzee extends Quirk {
    constructor() {
        super("Gamzee Makara");
    }

    quirkify(): void {
        this.applyAlternatingCaps();
        this.replaceEmotes("$1o$2");
    }

    applyAlternatingCaps(): void {
        let result: string = "";
        let cap: boolean = true;
        for (let i = 0; i < this.input.length; i++) {
            let c = this.input.charAt(i);
            if (c.match(/\w/i)) {
                result += cap ? c.toLocaleUpperCase() : c.toLocaleLowerCase();
                cap = !cap;
            } else {
                result += c;
            }
        }

        this.input = result;
    }
}