export type QuirkMod = {
    id: string;
    title: string;
    description: string;
    defaultValue: boolean;
};

export type ModList = {
    [key: string]: boolean;
};

export default abstract class Quirk {
    public readonly name;
    public readonly tag;
    public color;
    public readonly mods;

    protected quirkText = "";

    protected constructor(
        name: string,
        tag: string,
        color: string,
        mods: QuirkMod[] = []
    ) {
        this.name = name;
        this.tag = tag;
        this.color = color;
        this.mods = mods;
    }

    public parseTextToQuirk(input: string, mods: ModList): string {
        this.quirkText = input;

        if (this.quirkText.length > 0) {
            this.quirkify(mods);
        }

        return this.quirkText;
    }

    protected abstract quirkify(mods: ModList): void;

    protected lowerCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.quirkText = this.quirkText.toLocaleLowerCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.quirkText = this.quirkText.replace(reg, (match) =>
                match.toLocaleLowerCase()
            );
        }
    }

    protected upperCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.quirkText = this.quirkText.toLocaleUpperCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.quirkText = this.quirkText.replace(reg, (match) =>
                match.toLocaleUpperCase()
            );
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
        this.quirkText = this.quirkText.replace(reg, (match) =>
            Quirk.matchCase(replace, match)
        );
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

    protected randomReplace(
        pattern: string,
        replace: string,
        prob: number
    ): void {
        const reg = new RegExp(pattern, "g");
        this.quirkText = this.quirkText.replace(reg, (match) => {
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
}
