export abstract class Quirk {
    static textFields: HTMLFieldSetElement;

    firstName: string;
    lastName: string;
    input: string;

    row: HTMLDivElement;
    textArea: HTMLTextAreaElement;
    activeCheckbox: HTMLInputElement;

    constructor(firstName: string, lastName: string, category: string) {
        this.firstName = firstName;
        this.lastName = lastName;

        // Create output text's elements.
        this.textArea = document.createElement("textarea");
        this.textArea.className = "textOutput";
        this.textArea.id = firstName.toLocaleLowerCase() + "Text";
        this.textArea.readOnly = true;
        this.textArea.textContent = "test";

        let label: HTMLLabelElement = document.createElement("label");
        label.insertAdjacentText('afterbegin', this.firstName + ":");

        this.row = document.createElement("div");
        this.row.id = firstName.toLocaleLowerCase() + "Row";
        this.row.insertAdjacentElement('beforeend', label);
        this.row.insertAdjacentElement('beforeend', this.textArea);

        Quirk.textFields.insertAdjacentElement('beforeend', this.row);

        // Create toggle checkbox.
        this.activeCheckbox = document.createElement("input");
        this.activeCheckbox.type = "checkbox";
        this.activeCheckbox.checked = true;
        this.activeCheckbox.id = firstName.toLocaleLowerCase();
        this.activeCheckbox.onchange = Quirk.updateVisibility;

        let tr: HTMLTableRowElement = document.createElement("tr");
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', firstName + ":");

        tr.insertAdjacentElement('beforeend', tdTitle);
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', this.activeCheckbox);
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(category + "Checkboxes").insertAdjacentElement('beforeend', tr);
    }

    static updateVisibility(event: MouseEvent): any {
        let checkbox: HTMLInputElement = <HTMLInputElement>event.currentTarget;
        let row: HTMLTableRowElement = <HTMLTableRowElement>document.getElementById(checkbox.id + "Row");
        row.hidden = !checkbox.checked;
    }

    update(str: string): void  {
        if (!this.activeCheckbox.checked || str.length < 1) { return; }

        this.input = str;
        this.quirkify();
        this.textArea.value = this.input;
    }

    abstract quirkify(): void;
}
