import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Nepeta extends Quirk {
    public constructor(name = "Nepeta Leijon", tag = alterniaTag) {
        const punsMod = {
            id: "puns",
            title: "Cat Puns",
            description: "Self-expurrnatory!",
            defaultValue: true,
        };

        super(name, tag, "#416600", [punsMod]);
    }

    protected quirkify(mods: { puns: boolean }): void {
        this.lowerCase();
        if (mods.puns) {
            this.applyCatPuns();
        }
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
