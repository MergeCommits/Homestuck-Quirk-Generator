import { Quirk } from "../Quirk";
import { CAT_SPR } from "../../Category";

export class Erisolsprite extends Quirk {
    constructor() {
        super("Erisolsprite", CAT_SPR);
    }

    quirkify(): void {
        this.lowerCase();
        this.replaceStr("w", "ww");
        this.replaceStr("v", "vv");
        this.replaceStr("i", "ii");
        this.replaceStr("s", "2");
    }
}