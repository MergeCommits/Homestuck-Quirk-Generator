import { Quirk } from "../Quirk";


export class Boldir extends Quirk {
    constructor() {
        super("Boldir Lamati", "polypa");
    }

    quirkify(): void {
        this.lowerCase();
        this.prefix("(");
        this.suffix(")");
    }
}