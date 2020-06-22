import { Quirk } from "../Quirk";


export class Tegiri extends Quirk {
    constructor() {
        super("Tegiri Kalbur", "tagora");
    }

    quirkify(): void {
        this.replaceString("[Ll]", "/");
    }
}