import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Tegiri extends Quirk {
    constructor() {
        super("Tegiri Kalbur", CAT_HIV, "tagora");
    }

    quirkify(): void {
        this.replaceStr("[Ll]", "/");
    }
}