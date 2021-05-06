import { Quirk } from "../../Quirk";

export class Karkat extends Quirk {
    constructor() {
        super("Karkat Vantas");
    }

    quirkify(): void {
        this.upperCase();
    }
}