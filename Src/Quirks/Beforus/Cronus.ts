import { Quirk } from "../Quirk";


export class Cronus extends Quirk {
    constructor() {
        super("Cronus Ampora", "eridan");
    }

    quirkify(): void {
        let reg: RegExp = new RegExp("[wv]", "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= 0.5) {
                return "wv";
            }
            return "vw";
        });
        this.replaceString("B", "8");
    }
}