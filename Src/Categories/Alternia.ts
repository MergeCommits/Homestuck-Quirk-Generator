import { Category } from "./Category";

import { Aradia } from "../Quirks/Alternia/Aradia";
import { Tavros } from "../Quirks/Alternia/Tavros";
import { Sollux } from "../Quirks/Alternia/Sollux";
import { Karkat } from "../Quirks/Alternia/Karkat";
import { Nepeta } from "../Quirks/Alternia/Nepeta";
import { Kanaya } from "../Quirks/Alternia/Kanaya";
import { Terezi } from "../Quirks/Alternia/Terezi";
import { Vriska } from "../Quirks/Alternia/Vriska";
import { Equius } from "../Quirks/Alternia/Equius";
import { Gamzee } from "../Quirks/Alternia/Gamzee";
import { Eridan } from "../Quirks/Alternia/Eridan";
import { Feferi } from "../Quirks/Alternia/Feferi";

export class Alternia extends Category {
    constructor() {
        super("Alternia");

        this.quirks.push(new Aradia());
        this.quirks.push(new Tavros());
        this.quirks.push(new Sollux());
        this.quirks.push(new Karkat());
        this.quirks.push(new Nepeta());
        this.quirks.push(new Kanaya());
        this.quirks.push(new Terezi());
        this.quirks.push(new Vriska());
        this.quirks.push(new Equius());
        this.quirks.push(new Gamzee());
        this.quirks.push(new Eridan());
        this.quirks.push(new Feferi());
    }
}