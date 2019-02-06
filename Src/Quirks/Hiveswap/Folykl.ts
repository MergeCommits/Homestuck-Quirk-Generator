import { Quirk } from "../Quirk";
import { CAT_HIV } from "../../Category";

export class Folykl extends Quirk {
    constructor() {
        super("Folykl", "Darane", CAT_HIV, "kuprum");
    }

    quirkify(): void {
        this.lowerCase();
        let reg: RegExp = new RegExp("\\s", "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= 0.1) {
                let MIN_LENGTH = 1;
                let MAX_LENGTH = 5;
                let length = Math.random() * (MAX_LENGTH + 1 - MIN_LENGTH) + MIN_LENGTH

                let retVal: string = "";
                for (let i = 0; i < length; i++) {
                    retVal += " ";
                }
                return retVal;
            }

            return match;
        });
    }

    getSpaces(length: number): string {
        let retVal: string = "";
        for (let i = 0; i < length; i++) {
            retVal += " ";
        }

        return retVal;
    }
}