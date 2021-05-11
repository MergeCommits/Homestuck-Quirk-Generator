import Category from "../Category";
import Rufioh from "quirks/database/beforus/Rufioh";
import Mituna from "quirks/database/beforus/Mituna";
import Kankri from "quirks/database/beforus/Kankri";
import Meulin from "quirks/database/beforus/Meulin";
import Porrim from "quirks/database/beforus/Porrim";
import Latula from "quirks/database/beforus/Latula";
import Aranea from "quirks/database/beforus/Aranea";
import Horuss from "quirks/database/beforus/Horuss";
import Kurloz from "quirks/database/beforus/Kurloz";
import Cronus from "quirks/database/beforus/Cronus";
import Meenah from "quirks/database/beforus/Meenah";

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