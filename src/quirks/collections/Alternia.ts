import Category from "quirks/Category";
import Aradia from "quirks/database/alternia/Aradia";
import Tavros from "quirks/database/alternia/Tavros";
import Sollux from "quirks/database/alternia/Sollux";
import Karkat from "quirks/database/alternia/Karkat";
import Nepeta from "quirks/database/alternia/Nepeta";
import Kanaya from "quirks/database/alternia/Kanaya";
import Terezi from "quirks/database/alternia/Terezi";
import Vriska from "quirks/database/alternia/Vriska";
import Equius from "quirks/database/alternia/Equius";
import Gamzee from "quirks/database/alternia/Gamzee";
import Eridan from "quirks/database/alternia/Eridan";
import Feferi from "quirks/database/alternia/Feferi";

export default class Alternia extends Category {
    public constructor() {
        super("Alternia");

        this.addQuirk(new Aradia());
        this.addQuirk(new Tavros());
        this.addQuirk(new Sollux());
        this.addQuirk(new Karkat());
        this.addQuirk(new Nepeta());
        this.addQuirk(new Kanaya());
        this.addQuirk(new Terezi());
        this.addQuirk(new Vriska());
        this.addQuirk(new Equius());
        this.addQuirk(new Gamzee());
        this.addQuirk(new Eridan());
        this.addQuirk(new Feferi());
    }
}