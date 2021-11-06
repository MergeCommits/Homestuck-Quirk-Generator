import Category from "quirks/Category";
import Caliborn from "quirks/canon/database/cherubs/Caliborn";
import Calliope from "quirks/canon/database/cherubs/Calliope";

export default class Cherubs extends Category {
    public constructor() {
        super("Cherubs");

        this.addQuirk(new Caliborn());
        this.addQuirk(new Calliope());
    }
}