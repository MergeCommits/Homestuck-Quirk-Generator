import { Category } from "./Category";
import { Caliborn } from "../Quirks/Cherubs/Caliborn";
import { Calliope } from "../Quirks/Cherubs/Calliope";

export class Cherubs extends Category {
    constructor() {
        super("Cherubs", "Cherubs only");

        this.quirks.push(new Caliborn());
        this.quirks.push(new Calliope());
    }
}