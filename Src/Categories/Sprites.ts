import { Category } from "./Category";
import { Tavrisprite } from "../Quirks/Sprites/Tavrisprite";
import { Erisolsprite } from "../Quirks/Sprites/Erisolsprite";

export class Sprites extends Category {
    constructor() {
        super("Sprites", "Sprites only");

        this.quirks.push(new Tavrisprite());
        this.quirks.push(new Erisolsprite());
    }
}