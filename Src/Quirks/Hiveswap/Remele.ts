import { Quirk } from "../Quirk";


export class Remele extends Quirk {
    constructor() {
        super("Remele Namaaq", "vriska");
    }

    quirkify(): void {
        this.randReplace("(\\w+)", "$1e", 0.5);
    }
}