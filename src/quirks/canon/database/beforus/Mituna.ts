import Quirk from "quirks/Quirk";
import { solluxColor } from "quirks/canon/database/alternia/Sollux";
import { beforusTag } from "quirks/canon/database/Tags";

export default class Mituna extends Quirk {
    public constructor() {
        const subMod = {
            id: "sub",
            title: "Random S/7 -> 7H",
            description: "Mituna's arbitrary conversion of 'S' and '7' to '7H'.",
            defaultValue: true
        };

        super("Mituna Captor", beforusTag, solluxColor, subMod);
    }

    protected quirkify(mods: { sub: boolean }): void {
        this.upperCase();
        if (mods.sub) { this.randomReplace("[S7]", "7H", 0.1); }
        this.replaceString("A", "4");
        this.replaceString("B", "8");
        this.replaceString("E", "3");
        this.replaceString("I", "1");
        this.replaceString("O", "0");
        this.replaceString("S", "5");
        this.replaceString("T", "7");
    }
}