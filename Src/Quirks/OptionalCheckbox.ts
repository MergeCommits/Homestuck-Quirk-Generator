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

        let td: HTMLTableCellElement = document.createElement("td");
        td.insertAdjacentText('beforeend', quirk.getShortName() + " ~ " + this.label + ":");
        td.insertAdjacentElement('beforeend', checkbox);

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.classList.add(id + "-optional");
        tr.classList.add("waves-effect");
        tr.classList.add("waves-" + id);
        tr.onclick = () => checkbox.click();
        tr.title = this.title;

        tr.insertAdjacentElement('beforeend', td)
        category.getOptionalCheckboxSetElement().insertAdjacentElement('beforeend', tr);

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