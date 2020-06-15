import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Marsti extends Quirk {
    constructor() {
        super("Marsti Houtek", CAT_HIV, "diemen");
    }

    quirkify(): void {
        this.suffix(" -_-");
    }
}