import { setCookieBool } from "../CookieManager";
import { Category } from "../Categories/Category";
import { Quirk } from "./Quirk";

export class OptionalCheckbox {
    innerCheckbox: HTMLInputElement;
    label: string;
    title: string;
    defaultValue: boolean;

    constructor(label: string, title: string, defaultValue: boolean = false) {
        this.label = label;
        this.title = title;
        this.defaultValue = defaultValue;
    }

    public render(category: Category, id: string, quirk: Quirk): void {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = this.label;
        checkbox.checked = this.defaultValue;
        checkbox.onchange = () => {
            setCookieBool(id + checkbox.id, checkbox.checked, 31);
            quirk.update(Quirk.inputField.value);
        }

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.onclick = () => checkbox.click();
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', quirk.getShortName() + " ~ " + this.label + ":");

        tr.insertAdjacentElement('beforeend', tdTitle);
        tr.title = this.title;
        tr.className = id + "-optional";
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', checkbox);
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(category.tabName.toLocaleLowerCase() + "-optional-table").insertAdjacentElement('beforeend', tr);

        this.innerCheckbox = checkbox;
        category.optionalCheckboxes.push(tr);
    }

    public isChecked(): boolean {
        return this.innerCheckbox.checked;
    }

    public getID(): string {
        return this.innerCheckbox.id;
    }

    public click(): void {
        this.innerCheckbox.click();
    }
}