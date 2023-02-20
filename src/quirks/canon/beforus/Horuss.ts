import { equiusColor } from "quirks/canon/alternia/Equius";
import { beforusTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Horuss extends Quirk {
    public constructor(name = "Horuss Zahhak", color = equiusColor) {
        const censorSwearsMod = {
            id: "censor",
            title: "Censor Swears",
            description: "Censors f*cking swear words.",
            defaultValue: false,
        };

        super(name, beforusTag, color, [censorSwearsMod]);
    }

    protected quirkify(mods: { censor: boolean }): void {
        if (mods.censor) {
            this.censorSwears(true);
        }
        this.replaceString("([Xx]|ks)", "%");
        this.prefix("8=D < ");
    }

    protected censorSwears(extreme: boolean): void {
        this.replaceMatchCase("fuck", "f*ck");
        this.replaceMatchCase("bitch", "b*tch");
        this.replaceMatchCase("shit", "sh*t");
        this.replaceMatchCase("damn", "d*mn");
        this.replaceMatchCase("crap", "cr*p");

        if (extreme) {
            this.replaceMatchCase("whoops", "wh**ps");
            this.replaceMatchCase("silly", "s*lly");
            this.replaceMatchCase("shoot", "sh**t");
            this.replaceMatchCase("fidging", "f*dging");
        }
    }
}
