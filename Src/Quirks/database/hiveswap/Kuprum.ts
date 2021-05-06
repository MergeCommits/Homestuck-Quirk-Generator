import { Quirk } from "../../Quirk";


export class Kuprum extends Quirk {
    constructor() {
        super("Kuprum Maxlol");
    }

    quirkify(): void {
        this.lowerCase();
        this.upperCase("\\bl+o[ol]*l\\b");
        this.prefix(">");
    }
}