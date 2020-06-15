import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Amisia extends Quirk {
    constructor() {
        super("Amisia Erdehn", CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("u", "uu");
    }
}