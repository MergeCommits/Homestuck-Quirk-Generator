import Category from "quirks/Category";
import Rufioh from "quirks/canon/database/beforus/Rufioh";
import Mituna from "quirks/canon/database/beforus/Mituna";
import Kankri from "quirks/canon/database/beforus/Kankri";
import Meulin from "quirks/canon/database/beforus/Meulin";
import Porrim from "quirks/canon/database/beforus/Porrim";
import Latula from "quirks/canon/database/beforus/Latula";
import Aranea from "quirks/canon/database/beforus/Aranea";
import Horuss from "quirks/canon/database/beforus/Horuss";
import Kurloz from "quirks/canon/database/beforus/Kurloz";
import Cronus from "quirks/canon/database/beforus/Cronus";
import Meenah from "quirks/canon/database/beforus/Meenah";

export default class Beforus extends Category {
    public constructor() {
        super("Beforus");

        this.addQuirk(new Rufioh());
        this.addQuirk(new Mituna());
        this.addQuirk(new Kankri());
        this.addQuirk(new Meulin());
        this.addQuirk(new Porrim());
        this.addQuirk(new Latula());
        this.addQuirk(new Aranea());
        this.addQuirk(new Horuss());
        this.addQuirk(new Kurloz());
        this.addQuirk(new Cronus());
        this.addQuirk(new Meenah());
    }
}