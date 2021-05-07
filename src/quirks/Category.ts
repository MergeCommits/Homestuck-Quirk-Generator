import Quirk from "quirks/Quirk";
import QuirkMutator from "quirks/QuirkMutator";

export default class Category {
    private readonly tabName: string;
    public get name(): string {
        return this.tabName;
    }

    private readonly _quirks: Map<string, Quirk>;
    public get quirks(): Map<string, Quirk> {
        return this._quirks;
    }

    public get quirkMutators(): QuirkMutator[] {
        const mutators = [];
        for (const quirk of this._quirks.values()) {
            mutators.push(...quirk.mutators);
        }

        return mutators;
    }

    public constructor(tabName: string) {
        this.tabName = tabName;
        this._quirks = new Map<string, Quirk>();
    }

    protected addQuirk(quirk: Quirk): void {
        this._quirks.set(quirk.identifier, quirk);
    }
}