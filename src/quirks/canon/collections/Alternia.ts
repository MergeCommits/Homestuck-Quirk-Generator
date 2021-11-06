import Category from "quirks/Category";
import Aradia from "quirks/canon/database/alternia/Aradia";
import Tavros from "quirks/canon/database/alternia/Tavros";
import Sollux from "quirks/canon/database/alternia/Sollux";
import Karkat from "quirks/canon/database/alternia/Karkat";
import Nepeta from "quirks/canon/database/alternia/Nepeta";
import Kanaya from "quirks/canon/database/alternia/Kanaya";
import Terezi from "quirks/canon/database/alternia/Terezi";
import Vriska from "quirks/canon/database/alternia/Vriska";
import Equius from "quirks/canon/database/alternia/Equius";
import Gamzee from "quirks/canon/database/alternia/Gamzee";
import Eridan from "quirks/canon/database/alternia/Eridan";
import Feferi from "quirks/canon/database/alternia/Feferi";

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