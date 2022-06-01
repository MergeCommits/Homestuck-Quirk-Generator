import Quirk, { QuirkMod } from "quirks/Quirk";

export default abstract class AlterniaQuirk extends Quirk {
    protected constructor(name: string, ...mods: QuirkMod[]) {
        super(name, "alternia", ...mods);
    }
}