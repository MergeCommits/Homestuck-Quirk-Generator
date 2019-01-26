export abstract class Quirk {
    static textFields: HTMLFieldSetElement;
    private category: string;

    firstName: string;
    lastName: string;
    input: string;

    row: HTMLDivElement;
    textArea: HTMLTextAreaElement;
    activeCheckbox: HTMLInputElement;

    constructor(firstName: string, lastName: string, category: string = "alternia") {
        this.category = category.toLocaleLowerCase();
        this.firstName = firstName;
        this.lastName = lastName;

        // Create output text's elements.
        this.textArea = document.createElement("textarea");
        this.textArea.className = "textOutput";
        this.textArea.id = firstName.toLocaleLowerCase() + "Text";
        this.textArea.readOnly = true;

        let label: HTMLLabelElement = document.createElement("label");
        label.insertAdjacentText('afterbegin', `${this.firstName} ${this.lastName}:`);

        this.row = document.createElement("div");
        this.row.id = firstName.toLocaleLowerCase() + "Row";
        this.row.insertAdjacentElement('beforeend', label);
        this.row.insertAdjacentElement('beforeend', this.textArea);

        Quirk.textFields.insertAdjacentElement('beforeend', this.row);

        // Create toggle checkbox.
        this.activeCheckbox = document.createElement("input");
        this.activeCheckbox.type = "checkbox";
        // TODO: Check cookies for previous settings.
        this.activeCheckbox.checked = true;
        this.activeCheckbox.onchange = (e) => this.updateVisibility();

        let tr: HTMLTableRowElement = document.createElement("tr");
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', firstName + ":");

        tr.insertAdjacentElement('beforeend', tdTitle)
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', this.activeCheckbox);;
        tr.onclick = (e) => this.activeCheckbox.click();
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(this.category + "Checkboxes").insertAdjacentElement('beforeend', tr);
    }

    updateVisibility(): void {
        let id = this.firstName.toLocaleLowerCase();
        let row: HTMLTableRowElement = <HTMLTableRowElement>document.getElementById(id + "Row");
        row.hidden = !this.activeCheckbox.checked;

        let optionals = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName(id + "Optional");
        for (let i = 0; i < optionals.length; i++) {
            optionals[i].hidden = !this.activeCheckbox.checked;
        }

        if (!row.hidden) {
            this.update((<HTMLTextAreaElement>document.getElementById("textInput")).value);
        }
    }

    update(str: string): void  {
        if (!this.activeCheckbox.checked || str.length < 1) { return; }

        this.input = str;
        this.quirkify();
        this.updateTextField();
    }

    updateTextField() {
        // alert(this.textArea.scrollHeight);
        this.textArea.value = this.input;

        // Auto re-size.
        Quirk.autoSize(this.textArea);
    }

    // Dynamically increase the height of a textarea.
    static autoSize(element: HTMLTextAreaElement): void {
        let minHeight: number = parseInt(window.getComputedStyle(element).getPropertyValue("min-height"));

        // alert(`${minHeight}, ${element.scrollHeight}`);
        element.style.cssText = `height: auto;`; // Let's the element shrink size.
        element.style.cssText = `height: ${Math.max(minHeight, element.scrollHeight)}px;`;
    }

    addCheckbox(label: string, title: string, defaultValue: boolean = false): HTMLInputElement {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = defaultValue;
        checkbox.onchange = (e) => this.update((<HTMLTextAreaElement>document.getElementById("textInput")).value);

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.onclick = (e) => checkbox.click();
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', this.firstName + " ~ " + label + ":");

        tr.insertAdjacentElement('beforeend', tdTitle);
        tr.title = title;
        tr.className = this.firstName.toLocaleLowerCase() + "Optional";
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', checkbox);
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(this.category + "Optionals").insertAdjacentElement('beforeend', tr);

        return checkbox;
    }

    abstract quirkify(): void;

    lowerCase(): void {
        this.input = this.input.toLocaleLowerCase();
    }

    upperCase(): void {
        this.input = this.input.toLocaleUpperCase();
    }

    prefix(str: string): void {
        this.input = str + this.input;
    }

    suffix(str: string): void {
        this.input += str;
    }

    replaceStr(pattern: string, replace: string, matchCase: boolean = false): void {
        if (!matchCase) {
            let reg: RegExp = new RegExp(pattern, "g");
            this.input = this.input.replace(reg, replace);
        } else {
            let reg: RegExp = new RegExp(pattern, "gi"); // Case-insensitivity.
            this.input = this.input.replace(reg, function(match) {
                return Quirk.matchCase(replace, match);
            });
        }
    }

    replaceWord(pattern: string, replace: string, matchCase: boolean = false): void {
        this.replaceStr("\\b" + pattern + "\\b", replace, matchCase);
    }

    // Function graciously stolen from https://stackoverflow.com/a/17265031/6446221.
    static matchCase(text: string, pattern: string) {
        // If the entire text is uppercase then uppercase the whole pattern regardless of lengths.
        if (pattern.toUpperCase() === pattern) {
            return text.toUpperCase();
        }

        var result = '';

        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var p = pattern.charCodeAt(i);

            // Could modify this for more than just ASCII but really who cares.
            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }

        return result;
    }

    // Troll-specific stuff below.
    trollEmotes(): void {
        this.replaceStr(":\\)", "}:)");
        this.replaceStr(":\\(", "}:(");
    }
}
