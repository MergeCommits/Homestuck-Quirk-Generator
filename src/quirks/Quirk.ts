export type QuirkCollection = {
    name: string;
    quirks: Quirk[]
};

export type QuirkMod = {
    title: string;
    description: string;
    defaultValue: boolean;
};

export type QuirkModList = {
    [key: string]: QuirkMod
};

export type Quirk = {
    name: string;
    mods?: QuirkModList;
    quirkify: (input: string, options?: { [key: string]: boolean }) => string;
};

type QuirkString = {
    text: string;
};

export function lowerCase(quirk: QuirkString, pattern = ""): void {
    if (pattern.length < 1) {
        quirk.text = quirk.text.toLocaleLowerCase();
    } else {
        const reg = new RegExp(pattern, "gi");
        quirk.text = quirk.text.replace(reg, (match) => match.toLocaleLowerCase());
    }
}

export function upperCase(quirk: QuirkString, pattern = ""): void {
    if (pattern.length < 1) {
        quirk.text = quirk.text.toLocaleUpperCase();
    } else {
        const reg = new RegExp(pattern, "gi");
        quirk.text = quirk.text.replace(reg, (match) => match.toLocaleUpperCase());
    }
}

export function prefix(quirk: QuirkString, str: string): void {
    quirk.text = str + quirk.text;
}

export function suffix(quirk: QuirkString, str: string): void {
    quirk.text += str;
}

export function replaceString(quirk: QuirkString, pattern: string, replace: string): void {
    const reg = new RegExp(pattern, "g");
    quirk.text = quirk.text.replace(reg, replace);
}

export function replaceCaseInsensitive(quirk: QuirkString, pattern: string, replace: string): void {
    const reg = new RegExp(pattern, "gi");
    quirk.text = quirk.text.replace(reg, replace);
}

export function replaceMatchCase(quirk: QuirkString, pattern: string, replace: string): void {
    const reg = new RegExp(pattern, "gi");
    quirk.text = quirk.text.replace(reg, (match) => matchCase(replace, match));
}

export function replaceWord(quirk: QuirkString, pattern: string, replace: string): void {
    replaceString(quirk, "\\b" + pattern + "\\b", replace);
}

export function replaceWordMatchCase(quirk: QuirkString, pattern: string, replace: string): void {
    replaceMatchCase(quirk, "\\b" + pattern + "\\b", replace);
}

// Function taken from https://stackoverflow.com/a/17265031/6446221.
function matchCase(text: string, pattern: string): string {
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

export function randomReplace(quirk: QuirkString, pattern: string, replace: string, prob: number): void {
    const reg = new RegExp(pattern, "g");
    quirk.text = quirk.text.replace(reg, (match) => {
        if (Math.random() <= prob) {
            return replace;
        }
        return match;
    });
}

// Troll-specific stuff below.

// $1 - capture group for eyes.
// $2 - capture group for mouth.
export function replaceEmotes(quirk: QuirkString, replace: string): void {
    const eyes = "[:;]";
    const mouth = "[\\)\\(Dd]";
    upperCase(quirk, `(${eyes})(${mouth})`);

    const reg = new RegExp(`(${eyes})(${mouth})`, "gi");
    quirk.text = quirk.text.replace(reg, replace);
}

export function applyCatPuns(quirk: QuirkString,): void {
    replaceMatchCase(quirk, "mother", "meowther");
    replaceMatchCase(quirk, "for", "fur");
    replaceMatchCase(quirk, "pause", "paws");
    replaceMatchCase(quirk, "cause", "claws");
    replaceMatchCase(quirk, "now", "meow");
    replaceMatchCase(quirk, "(per|pre)", "pur");
}

export function applyFishPuns(quirk: QuirkString,): void {
    replaceMatchCase(quirk, "kill", "krill");
    replaceMatchCase(quirk, "well", "whale");
    replaceMatchCase(quirk, "fine", "fin");
    replaceMatchCase(quirk, "see", "sea");
    replaceMatchCase(quirk, "should", "shoald");
    replaceMatchCase(quirk, "kid", "squid");
    replaceMatchCase(quirk, "sure", "shore");
    replaceMatchCase(quirk, "crap", "carp");
    replaceMatchCase(quirk, "(what are|what do)", "water");
}

export function applyTiaraEmotes(quirk: QuirkString): void {
    replaceEmotes(quirk, "38$2");
}

export function censorSwears(quirk: QuirkString, extreme = false): void {
    replaceWordMatchCase(quirk, "fuck", "f*ck");
    replaceWordMatchCase(quirk, "bitch", "b*tch");
    replaceWordMatchCase(quirk, "shit", "sh*t");
    replaceWordMatchCase(quirk, "damn", "d*mn");
    replaceWordMatchCase(quirk, "crap", "cr*p");

    if (extreme) {
        replaceMatchCase(quirk, "whoops", "wh**ps");
        replaceMatchCase(quirk, "silly", "s*lly");
        replaceMatchCase(quirk, "shoot", "sh**t");
        replaceMatchCase(quirk, "fidging", "f*dging");
    }
}
