import {Category} from "./Category";
import {Rufioh} from "../Quirks/Beforus/Rufioh";
import {Mituna} from "../Quirks/Beforus/Mituna";
import {Cronus} from "../Quirks/Beforus/Cronus";
import {Horuss} from "../Quirks/Beforus/Horuss";
import {Aranea} from "../Quirks/Beforus/Aranea";
import {Porrim} from "../Quirks/Beforus/Porrim";
import {Latula} from "../Quirks/Beforus/Latula";
import {Meenah} from "../Quirks/Beforus/Meenah";
import {Kurloz} from "../Quirks/Beforus/Kurloz";
import {Kankri} from "../Quirks/Beforus/Kankri";
import {Meulin} from "../Quirks/Beforus/Meulin";

export class Beforus extends Category {
    constructor() {
        super("Beforus", "Beforus Trolls only");

        this.quirks.push(new Rufioh());
        this.quirks.push(new Mituna());
        this.quirks.push(new Kankri());
        this.quirks.push(new Meulin());
        this.quirks.push(new Porrim());
        this.quirks.push(new Latula());
        this.quirks.push(new Aranea());
        this.quirks.push(new Horuss());
        this.quirks.push(new Kurloz());
        this.quirks.push(new Cronus());
        this.quirks.push(new Meenah());
    }
}