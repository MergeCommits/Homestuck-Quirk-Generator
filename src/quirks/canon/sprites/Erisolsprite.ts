import { spritesTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Erisolsprite extends Quirk {
    public constructor() {
        super("Erisolsprite", spritesTag, "#4AC925");
    }

    protected override quirkify(): void {
        this.lowerCase();
        this.replaceString("w", "ww");
        this.replaceString("v", "vv");
        this.replaceString("i", "ii");
        this.replaceString("s", "2");
    }
}
