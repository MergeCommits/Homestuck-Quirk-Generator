import { Quirk } from "../../Quirk";


export class Remele extends Quirk {
    constructor() {
        super("Remele Namaaq", "vriska");
    }

    quirkify(): void {
        let reg: RegExp = new RegExp("\\w+", "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= 0.5) {
                return match + "e";
            }
            return match;
        });
    }
}
