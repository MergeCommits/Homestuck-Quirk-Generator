import Quirk from "quirks/Quirk";

export default class Category {
    private readonly tabName: string;
    public get name(): string {
        return this.tabName;
    }

    public readonly quirks: Quirk[];

    public constructor(tabName: string) {
        this.tabName = tabName;
        this.quirks = new Array<Quirk>();
    }

    protected addQuirk(quirk: Quirk): void {
        this.quirks.push(quirk);
    }
}