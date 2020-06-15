import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Nihkee extends Quirk {
    constructor() {
        super("Nihkee Moolah", CAT_HIV, "amisia");
    }

    quirkify(): void {
        this.prefix("[()] ");
    }
}