import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Feferi extends AlterniaQuirk {
    public constructor() {
        const punsMod = {
            id: "puns",
            title: "Fish Puns",
            description: "Shellf-explanatory!",
            defaultValue: true
        };

        super("Feferi Peixes", punsMod);
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
}