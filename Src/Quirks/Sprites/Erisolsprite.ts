import { Quirk } from "../Quirk";

export class Erisolsprite extends Quirk {
    constructor() {
        super("Erisolsprite");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
    }
}