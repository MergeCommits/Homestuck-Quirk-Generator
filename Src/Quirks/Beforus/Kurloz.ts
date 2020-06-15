import { Quirk } from "../Quirk";


export class Kurloz extends Quirk {
    constructor() {
        super("Kurloz Makara", "gamzee");
    }

    quirkify(): void {
        this.upperCase();
    }
}