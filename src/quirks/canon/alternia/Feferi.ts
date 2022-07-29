import Quirk from "quirks/Quirk";
import { alterniaTag } from "quirks/canon/Tags";

export default class Feferi extends Quirk {
    public constructor(name = "Feferi Peixes", tag = alterniaTag) {
        const punsMod = {
            id: "puns",
            title: "Fish Puns",
            description: "Shellf-explanatory!",
            defaultValue: true
        };

        super(name, tag, "#77003C", [punsMod]);
    }

    protected quirkify(mods: { puns: boolean }): void {
        if (mods.puns) { this.applyFishPuns(); }
        this.replaceString("[Hh]", ")(");
        this.replaceString("E", "-E");
        this.applyTiaraEmotes();
    }

    protected applyFishPuns(): void {
        this.replaceMatchCase("kill", "krill");
        this.replaceMatchCase("well", "whale");
        this.replaceMatchCase("fine", "fin");
        this.replaceMatchCase("see", "sea");
        this.replaceMatchCase("should", "shoald");
        this.replaceMatchCase("kid", "squid");
        this.replaceMatchCase("sure", "shore");
        this.replaceMatchCase("crap", "carp");
        this.replaceMatchCase("(what are|what do)", "water");
    }

    protected applyTiaraEmotes(): void {
        this.replaceEmotes("38$2");
    }
}
