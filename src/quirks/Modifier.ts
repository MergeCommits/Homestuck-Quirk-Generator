import Quirk from "quirks/Quirk";

export default class Modifier {
    public readonly label: string;
    public readonly description: string;

    public active: boolean;
    public readonly identifier: string;
    private quirk: Quirk;

    public get quirkIdentifier(): string {
        return this.quirk.identifier;
    }

    private constructor(label: string, description: string, defaultValue: boolean, quirk: Quirk) {
        this.label = `${quirk.name.split(" ")[0]} ~ ${label}`;
        this.description = description;
        this.active = defaultValue;
        this.quirk = quirk;

        const labelID = label.toLocaleLowerCase().replace(new RegExp("[\\s]"), "-");
        this.identifier = `${this.quirk.identifier}-${labelID}`;
    }

    public static factoryCreate(label: string, tooltip: string, defaultValue: boolean, quirk: Quirk): Modifier {
        return new Modifier(label, tooltip, defaultValue, quirk);
    }
}