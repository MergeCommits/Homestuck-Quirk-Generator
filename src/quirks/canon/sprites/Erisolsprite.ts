import Quirk from "quirks/Quirk";
import { spritesTag } from "quirks/canon/Tags";

export default class Erisolsprite extends Quirk {
    public constructor() {
        super("Erisolsprite", spritesTag, "#4AC925");
    }

    protected quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
    }
}