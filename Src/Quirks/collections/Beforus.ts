import Category from "../Category";
import Rufioh from "@/quirks/database/beforus/Rufioh";
// import Mituna from "@/quirks/collections/beforus/Mituna";
// import Cronus from "@/quirks/collections/beforus/Cronus";
// import Horuss from "@/quirks/collections/beforus/Horuss";
// import Aranea from "@/quirks/collections/beforus/Aranea";
// import Porrim from "@/quirks/collections/beforus/Porrim";
// import Latula from "@/quirks/collections/beforus/Latula";
// import Meenah from "@/quirks/collections/beforus/Meenah";
// import Kurloz from "@/quirks/collections/beforus/Kurloz";
// import Kankri from "@/quirks/collections/beforus/Kankri";
// import Meulin from "@/quirks/collections/beforus/Meulin";

export default class Beforus extends Category {
    public constructor() {
        super("Beforus");

        this.addQuirk(new Rufioh());
        // this.quirks.push(new Mituna());
        // this.quirks.push(new Kankri());
        // this.quirks.push(new Meulin());
        // this.quirks.push(new Porrim());
        // this.quirks.push(new Latula());
        // this.quirks.push(new Aranea());
        // this.quirks.push(new Horuss());
        // this.quirks.push(new Kurloz());
        // this.quirks.push(new Cronus());
        // this.quirks.push(new Meenah());
    }
}