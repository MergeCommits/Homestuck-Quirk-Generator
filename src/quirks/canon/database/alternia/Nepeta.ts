import AlterniaQuirk from "quirks/canon/database/AlterniaQuirk";

export default class Nepeta extends AlterniaQuirk {
    public constructor() {
        const punsMod = {
            id: "puns",
            title: "Cat Puns",
            description: "Self-expurrnatory!",
            defaultValue: true
        };

        super("Nepeta Leijon", "#416600", punsMod);
    }

    protected quirkify(mods: { puns: boolean }): void {
        this.lowerCase();
        if (mods.puns) { this.applyCatPuns(); }
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    }

    protected applyCatPuns(): void {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("for", "fur");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("(per|pre)", "pur");
    }
}