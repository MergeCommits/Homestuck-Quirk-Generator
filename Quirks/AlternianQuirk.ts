import { Quirk } from "./Quirk";

export abstract class AlternianQuirk extends Quirk {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName, "alternia");
    }

    abstract quirkify(): void;
}
