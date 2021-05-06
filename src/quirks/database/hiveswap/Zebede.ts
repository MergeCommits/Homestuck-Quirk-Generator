import { Quirk } from "../../Quirk";


export class Zebede extends Quirk {
    constructor() {
        super("Zebede Tongva", "kuprum");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("s\\b", "z");
        this.replaceEmotes("z$1$2");
    }
}