import { Quirk } from "../Quirk";


export class Wanshi extends Quirk {
    constructor() {
        super("Wanshi Adyata", "bronya");
    }

    quirkify(): void {
        this.replaceStr("w", "W");
        this.prefix("[]");
        this.suffix("[]");
    }
}