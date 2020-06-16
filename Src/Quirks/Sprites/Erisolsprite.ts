import { Quirk } from "../Quirk";

export class Erisolsprite extends Quirk {
    constructor() {
        super("Erisolsprite");
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("w", "ww");
        this.replaceStr("v", "vv");
        this.replaceStr("i", "ii");
        this.replaceStr("s", "2");
    }
}