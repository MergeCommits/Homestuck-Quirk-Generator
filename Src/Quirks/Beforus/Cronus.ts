import { Quirk } from "../Quirk";
import { CAT_BEF } from "../../Category";

export class Cronus extends Quirk {
    constructor() {
        super("Cronus", "Ampora", CAT_BEF, "eridan");
    }

    quirkify(): void {
        let reg: RegExp = new RegExp("[wv]", "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= 0.5) {
                return "wv";
            }
            return "vw";
        });
        this.replaceStr("B", "8");
    }
}