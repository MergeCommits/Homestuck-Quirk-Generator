import { prefix, Quirk, replaceCaseInsensitive, replaceMatchCase, replaceString, upperCase } from "quirks/Quirk";

function quirkify(input: string) {
    const quirk = { text: input };

    replaceString(quirk, "x", "%");
    replaceMatchCase(quirk, "nay", "neigh");
    replaceCaseInsensitive(quirk, "loo", "100");
    replaceCaseInsensitive(quirk, "loo", "100");
    upperCase(quirk, "STRONG");
    prefix(quirk, "D --> ");

    return quirk.text;
}

export default {
    name: "Equius Zahhak",
    quirkify
} as Quirk;