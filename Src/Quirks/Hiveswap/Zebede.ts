import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Zebede extends Quirk {
    constructor() {
        super("Zebede", "Tongva", CAT_HIV, "kuprum");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("s\\b", "z");
        this.replaceEmotes("z$1$2");
    }
}