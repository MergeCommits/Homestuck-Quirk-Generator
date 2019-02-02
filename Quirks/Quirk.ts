import { Category, CAT_ALT } from "./Category";
import { select_all_and_copy } from "./Copy2Clipboard";

export abstract class Quirk {
    static inputField: HTMLTextAreaElement;
    static textFields: HTMLFieldSetElement;
    private category: Category;

    firstName: string;
    lastName: string;
    input: string;

    row: HTMLDivElement;
    textArea: HTMLTextAreaElement;
    activeCheckbox: HTMLInputElement;

    constructor(firstName: string, lastName: string, category: Category = CAT_ALT, colorClass: string = firstName.toLocaleLowerCase()) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.category = category;

        // Create output text's elements.
        this.textArea = document.createElement("textarea");
        this.textArea.className = "textOutput";
        this.textArea.classList.add(colorClass + "Color");
        this.textArea.readOnly = true;
        this.textArea.onclick = select_all_and_copy;

        let label: HTMLLabelElement = document.createElement("label");
        if (this.lastName.length > 0) {
            label.insertAdjacentText('afterbegin', `${this.firstName} ${this.lastName}:`);
        } else {
            label.insertAdjacentText('afterbegin', `${this.firstName}:`);
        }

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
        tr.onclick = () => this.activeCheckbox.click();
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(this.category.tabName.toLocaleLowerCase() + "Checkboxes").insertAdjacentElement('beforeend', tr);
    }

    updateVisibility(): void {
        let id = this.firstName.toLocaleLowerCase();
        let row: HTMLTableRowElement = <HTMLTableRowElement>document.getElementById(id + "Row");
        row.hidden = !this.activeCheckbox.checked;

        let optionals = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName(id + "Optional");
        for (let i = 0; i < optionals.length; i++) {
            optionals[i].hidden = !this.activeCheckbox.checked;
        }

        let optionalElement: HTMLTableElement = <HTMLTableElement>document.getElementById(this.category.tabName.toLocaleLowerCase() + "Optionals");
        let visible = !row.hidden
        if (visible) {
            this.update(Quirk.inputField.value);

            if (optionalElement.hidden && optionals.length > 0) {
                optionalElement.hidden = false;
            }
        } else {
            // Check if any other optional checkboxes are visible.
            for (let i = 0; i < this.category.optionalCheckboxes.length; i++) {
                if (!this.category.optionalCheckboxes[i].hidden) {
                    return;
                }
            }

            // Hide the table.
            optionalElement.hidden = true;
        }
    }

    update(str: string): void  {
        if (!this.activeCheckbox.checked || str.length < 1) { return; }

        this.input = str;
        this.quirkify();
        this.updateTextField();
    }

    updateTextField() {
        this.textArea.value = this.input;

        // Auto resize.
        Quirk.autoSize(this.textArea);
    }

    // Dynamically increase the height of a textarea.
    static autoSize(element: HTMLTextAreaElement): void {
        let minHeight: number = parseInt(window.getComputedStyle(element).getPropertyValue("min-height"));

        element.style.height = "auto"; // Lets the element shrink size.
        element.style.height = `${Math.max(minHeight, element.scrollHeight)}px`;
    }

    addCheckbox(label: string, title: string, defaultValue: boolean = false): HTMLInputElement {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = defaultValue;
        checkbox.onchange = () => this.update(Quirk.inputField.value);

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.onclick = () => checkbox.click();
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', this.firstName + " ~ " + label + ":");

        tr.insertAdjacentElement('beforeend', tdTitle);
        tr.title = title;
        tr.className = this.firstName.toLocaleLowerCase() + "Optional";
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', checkbox);
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        document.getElementById(this.category.tabName.toLocaleLowerCase() + "Optionals").insertAdjacentElement('beforeend', tr);

        this.category.optionalCheckboxes.push(tr);
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

    replaceStr(pattern: string, replace: string, matchCase: boolean = false, caseinsensitive: boolean = false): void {
        let reg: RegExp;
        if (!matchCase) {
            if (!caseinsensitive) {
                reg = new RegExp(pattern, "g");
            } else {
                reg = new RegExp(pattern, "gi");
            }
            this.input = this.input.replace(reg, replace);
        } else {
            reg = new RegExp(pattern, "gi");
            this.input = this.input.replace(reg, function(match) {
                return Quirk.matchCase(replace, match);
            });
        }
    }

    replaceWord(pattern: string, replace: string, matchCase: boolean = false, caseinsensitive: boolean = false): void {
        this.replaceStr("\\b" + pattern + "\\b", replace, matchCase, caseinsensitive);
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

            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }

        return result;
    }

    changeCase(pattern: string, upper: boolean) {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function(match) {
            if (upper) {
                return match.toLocaleUpperCase();
            }
            return match.toLocaleLowerCase();
        });
    }

    randReplace(pattern: string, replace: string, prob: number) {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= prob) {
                return replace;
            }
            return match;
        });
    }

    // Troll-specific stuff below.
    // $1 capture group for eyes.
    // $2 capture group for mouth.
    replaceEmotes(replace: string): void {
        let eyes = "[:;]";
        let mouth = "[\\)\\(Dd]";

        let reg: RegExp = new RegExp(`(${eyes})(${mouth})`, "gi");
        this.input = this.input.replace(reg, replace);
    }

    catPuns(): void {
        this.replaceStr("mother", "meowther", true);
        this.replaceStr("for", "fur", true);
        this.replaceStr("pause", "paws", true);
        this.replaceStr("cause", "claws", true);
        this.replaceStr("now", "meow", true);
        this.replaceStr("(per|pre)", "pur", true);
    }

    fishPuns(): void {
        this.replaceStr("kill", "krill", true);
        this.replaceStr("well", "whale", true);
        this.replaceStr("fine", "fin", true);
        this.replaceStr("see", "sea", true);
        this.replaceStr("should", "shoald", true);
        this.replaceStr("kid", "squid", true);
        this.replaceStr("sure", "shore", true)
        this.replaceStr("crap", "carp", true)
        this.replaceWord("(what are|what do)", "water", true);
    }

    tiaraEmotes(): void {
        this.replaceEmotes("38$2");
    }

    censorSwears(extreme: boolean = false): void {
        this.replaceWord("fuck", "f*ck", true);
        this.replaceWord("bitch", "b*tch", true);
        this.replaceWord("nigger", "n*gger", true);
        this.replaceWord("niggers", "n*ggers", true);
        this.replaceWord("shit", "sh*t", true);
        this.replaceWord("damn", "d*mn", true);
        this.replaceWord("crap", "cr*p", true);

        if (extreme) {
            this.replaceStr("whoops", "wh**ps", true);
            this.replaceStr("silly", "s*lly"), true;
            this.replaceStr("shoot", "sh**t", true);
            this.replaceStr("fidging", "f*dging", true);
        }
    }
}
