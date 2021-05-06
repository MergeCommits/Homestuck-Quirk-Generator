import Quirk from "quirks/Quirk";

export default class Category {
    private readonly tabName: string;
    public get name(): string {
        return this.tabName;
    }

    private readonly quirks: Array<Quirk>;
    public get quirkCollection(): Quirk[] {
        return this.quirks;
    }

    public constructor(tabName: string) {
        this.tabName = tabName;
        this.quirks = new Array<Quirk>();
    }

    protected addQuirk(quirk: Quirk): void {
        this.quirks.push(quirk);
    }

    public setText(input: string): void {
        for (let i = 0; i < this.quirks.length; i++) {
            this.quirks[i].inputText = input;
            this.quirks[i].transformInputText();
        }
    }
}