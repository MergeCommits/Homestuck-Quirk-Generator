import Quirk from "@/quirks/Quirk";

export default class QuirkMutator {
    private readonly _label: string;
    public get label(): string {
        return this._label;
    }

    private readonly _tooltip: string;
    public get tooltip(): string {
        return this._tooltip;
    }

    private value: boolean;
    public get active(): boolean {
        return this.value;
    }

    private quirk: Quirk;

    private constructor(label: string, tooltip: string, defaultValue: boolean, quirk: Quirk) {
        this._label = label;
        this._tooltip = tooltip;
        this.value = defaultValue;
        this.quirk = quirk;
    }

    public static factoryCreate(label: string, tooltip: string, defaultValue: boolean, quirk: Quirk): QuirkMutator {
        return new QuirkMutator(label, tooltip, defaultValue, quirk);
    }

    public toggle(): void {
        this.value = !this.value;
        this.quirk.transformInputText();
    }
}