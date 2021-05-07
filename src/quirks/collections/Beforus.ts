import Category from "../Category";
import Rufioh from "quirks/database/beforus/Rufioh";

export default class Beforus extends Category {
    public constructor() {
        super("Beforus");

        this.addQuirk(new Rufioh());
        // this.addQuirk(new Mituna());
        // this.addQuirk(new Kankri());
        // this.addQuirk(new Meulin());
        // this.addQuirk(new Porrim());
        // this.addQuirk(new Latula());
        // this.addQuirk(new Aranea());
        // this.addQuirk(new Horuss());
        // this.addQuirk(new Kurloz());
        // this.addQuirk(new Cronus());
        // this.addQuirk(new Meenah());
    }
}