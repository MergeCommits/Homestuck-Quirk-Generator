import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Kuprum extends Quirk {
    constructor() {
        super("Kuprum", "Maxlol", CAT_HIV);
    }

    quirkify(): void {
        this.lowerCase();
        this.changeCase("\\bl+o[ol]*l\\b", true);
        this.prefix(">");
    }
}