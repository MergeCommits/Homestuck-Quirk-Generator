import QuirkMutator from "quirks/QuirkMutator";

export default abstract class Quirk {
    public readonly name: string;

    public readonly identifier: string;

    public readonly mutators: QuirkMutator[];

    private rawInputText = "";
    public set inputText(input: string) {
        this.rawInputText = input;
        this.transformInputText();
    }

    protected quirkText = "";
    public get outputText(): string {
        return this.quirkText;
    }

    protected constructor(name: string, identifier?: string) {
        this.name = name;
        this.identifier = identifier ? identifier : this.name.toLocaleLowerCase().replace(new RegExp("[\\s]"), "-");
        this.mutators = new Array<QuirkMutator>();
    }

    protected addMutator(label: string, tooltip: string, defaultValue: boolean): QuirkMutator {
        const mutator = QuirkMutator.factoryCreate(label, tooltip, defaultValue, this);
        this.mutators.push(mutator);
        return mutator;
    }

    public transformInputText(): void {
        if (this.rawInputText === "") {
            this.quirkText = "";
            return;
        }

        this.quirkText = this.rawInputText;
        this.quirkify();
    }

    protected abstract quirkify(): void;

    protected lowerCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.quirkText = this.quirkText.toLocaleLowerCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.quirkText = this.quirkText.replace(reg, function(match) {
                return match.toLocaleLowerCase();
            });
        }
    }

    protected upperCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.quirkText = this.quirkText.toLocaleUpperCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.quirkText = this.quirkText.replace(reg, function(match) {
                return match.toLocaleUpperCase();
            });
        }
    }

    protected prefix(str: string): void {
        this.quirkText = str + this.quirkText;
    }

    protected suffix(str: string): void {
        this.quirkText += str;
    }

    protected replaceString(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "g");
        this.quirkText = this.quirkText.replace(reg, replace);
    }

    protected replaceCaseInsensitive(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "gi");
        this.quirkText = this.quirkText.replace(reg, replace);
    }

    protected replaceMatchCase(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "gi");
        this.quirkText = this.quirkText.replace(reg, function(match) {
            return Quirk.matchCase(replace, match);
        });
    }

    protected replaceWord(pattern: string, replace: string): void {
        this.replaceString("\\b" + pattern + "\\b", replace);
    }

    protected replaceWordMatchCase(pattern: string, replace: string): void {
        this.replaceMatchCase("\\b" + pattern + "\\b", replace);
    }

    // Function taken from https://stackoverflow.com/a/17265031/6446221.
    private static matchCase(text: string, pattern: string): string {
        // If the entire text is uppercase then uppercase the whole pattern regardless of lengths.
        if (pattern.toUpperCase() === pattern) {
            return text.toUpperCase();
        }

        let result = "";

        for (let i = 0; i < text.length; i++) {
            const c = text.charAt(i);
            const p = pattern.charCodeAt(i);

            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }

        return result;
    }

    protected randomReplace(pattern: string, replace: string, prob: number): void {
        const reg = new RegExp(pattern, "g");
        this.quirkText = this.quirkText.replace(reg, function(match) {
            if (Math.random() <= prob) {
                return replace;
            }
            return match;
        });
    }

    // Troll-specific stuff below.

    // $1 - capture group for eyes.
    // $2 - capture group for mouth.
    protected replaceEmotes(replace: string): void {
        const eyes = "[:;]";
        const mouth = "[\\)\\(Dd]";
        this.upperCase(`(${eyes})(${mouth})`);

        const reg = new RegExp(`(${eyes})(${mouth})`, "gi");
        this.quirkText = this.quirkText.replace(reg, replace);
    }

    protected applyCatPuns(): void {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("for", "fur");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("(per|pre)", "pur");
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

    protected censorSwears(extreme = false): void {
        this.replaceWordMatchCase("fuck", "f*ck");
        this.replaceWordMatchCase("bitch", "b*tch");
        this.replaceWordMatchCase("shit", "sh*t");
        this.replaceWordMatchCase("damn", "d*mn");
        this.replaceWordMatchCase("crap", "cr*p");

        if (extreme) {
            this.replaceMatchCase("whoops", "wh**ps");
            this.replaceMatchCase("silly", "s*lly");
            this.replaceMatchCase("shoot", "sh**t");
            this.replaceMatchCase("fidging", "f*dging");
        }
    }
}
