import { Quirk } from "../Quirk";


export class Kuprum extends Quirk {
    constructor() {
        super("Kuprum Maxlol");
    }

    quirkify(): void {
        this.lowerCase();
        this.changeCase("\\bl+o[ol]*l\\b", true);
        this.prefix(">");
    }
}