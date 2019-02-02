import { Quirk } from "../Quirk";
import { CAT_HIV } from "../Category";

export class Wanshi extends Quirk {
    constructor() {
        super("Wanshi", "Adyata", CAT_HIV, "bronya");
    }

    quirkify(): void {
        this.replaceStr("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    }
}