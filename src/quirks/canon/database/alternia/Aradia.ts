import { lowerCase, Quirk, replaceString, suffix } from "quirks/Quirk";

const mods = {
    dead: {
        title: "Dead Quirk",
        description: "Aradia's typing quirk used when she is dead (o --> 0).",
        defaultValue: true
    }
};

type Options = { [key in keyof typeof mods]: boolean };

function quirkify(input: string, options: Options) {
    const quirk = { text: input };

    lowerCase(quirk);
    if (options.dead) {
        replaceString(quirk, "o", "0");

        if (Math.random() <= 0.1) {
            suffix(quirk, " ribbit");
        }
    }

    return quirk.text;
}

export default {
    name: "Aradia Megido",
    mods,
    quirkify
} as unknown as Quirk;