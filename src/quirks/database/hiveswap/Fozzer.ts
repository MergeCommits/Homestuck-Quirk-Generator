import { Quirk } from "../../Quirk";


export class Fozzer extends Quirk {
    constructor() {
        super("Fozzer Velyes", "diemen");
    }

    quirkify(): void {
        this.replaceString("\\s", "_");
    }
}