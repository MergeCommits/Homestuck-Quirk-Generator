import { Quirk } from "../Quirk";

export class Feferi extends Quirk {
    puns: HTMLInputElement;

    constructor() {
        super("Feferi", "Peixes");
        this.puns = this.addCheckbox("Fish Puns", "Shellf-explanatory!", true)
    }

    quirkify(): void {
        if (this.puns.checked) { this.fishPuns(); }
        this.replaceStr("[Hh]", ")(");
        this.replaceStr("E", "-E");
        this.tiaraEmotes();
    }

    tiaraEmotes(): void {
        this.replaceStr(":([\)\(D])", "38$1");
    }

    fishPuns(): void {
        this.replaceStr("kill", "krill", true);
        this.replaceStr("well", "whale", true);
        this.replaceStr("fine", "fin", true);
        this.replaceStr("see", "sea", true);
        this.replaceStr("should", "shoald", true);
        this.replaceStr("kid", "squid", true);
        this.replaceStr("sure", "shore", true)
        this.replaceStr("crap", "carp", true)
        this.replaceWord("(what are|what do)", "water", true);
    }
}