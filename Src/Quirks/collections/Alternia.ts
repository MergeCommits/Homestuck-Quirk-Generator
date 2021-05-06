import Category from "../Category";

import Aradia from "../database/alternia/Aradia";
import Tavros from "../database/alternia/Tavros";
// import Sollux from "./alternia/Sollux";
// import Karkat from "./alternia/Karkat";
// import Nepeta from "./alternia/Nepeta";
// import Kanaya from "./alternia/Kanaya";
// import Terezi from "./alternia/Terezi";
// import Vriska from "./alternia/Vriska";
// import Equius from "./alternia/Equius";
// import Gamzee from "./alternia/Gamzee";
// import Eridan from "./alternia/Eridan";
// import Feferi from "./alternia/Feferi";

export default class Alternia extends Category {
    public constructor() {
        super("Alternia");

        this.addQuirk(new Aradia());
        this.addQuirk(new Tavros());
    }
}