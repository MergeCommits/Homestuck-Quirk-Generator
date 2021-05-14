import Quirk from "quirks/Quirk";

export default class QuirkMutator {
    public readonly label: string;

    private readonly _tooltip: string;
    public get tooltip(): string {
        return this._tooltip;
    }

    public get quirkIdentifier(): string {
        return this.quirk.identifier;
    }

    public readonly identifier: string;

    private value: boolean;
    public get active(): boolean {
        return this.value;
    }

    private quirk: Quirk;

    private constructor(label: string, tooltip: string, defaultValue: boolean, quirk: Quirk) {
        this.label = `${quirk.name.split(" ")[0]} ~ ${label}`;
        this._tooltip = tooltip;
        this.value = defaultValue;
        this.quirk = quirk;
        this.identifier = this.quirkIdentifier + "-" + this.label.toLocaleLowerCase().replace(new RegExp("[\\s]"), "-");
    }

    public static factoryCreate(label: string, tooltip: string, defaultValue: boolean, quirk: Quirk): QuirkMutator {
        return new QuirkMutator(label, tooltip, defaultValue, quirk);
    }

    public toggle(): void {
        this.value = !this.value;
        this.quirk.transformInputText();
    }
}