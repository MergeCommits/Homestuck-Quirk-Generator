import { Quirk } from "../Quirk";


export class Stelsa extends Quirk {
    constructor() {
        super("Stelsa Lamati", "tagora");
    }

    quirkify(): void {
        this.upperCase();
    }
}