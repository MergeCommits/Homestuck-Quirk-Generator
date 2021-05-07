import Category from "quirks/Category";
import Aradia from "quirks/database/alternia/Aradia";
import Tavros from "quirks/database/alternia/Tavros";

export default class Alternia extends Category {
    public constructor() {
        super("Alternia");

        this.addQuirk(new Aradia());
        // this.addQuirk(new Tavros());
    }
}