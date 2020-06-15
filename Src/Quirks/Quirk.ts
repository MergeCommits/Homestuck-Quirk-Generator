
import { renderHTML } from "../Templates/QuirkField";
import { setCookieBool } from "../CookieManager";
import {Category} from "../Categories/Category";

export abstract class Quirk {
    static inputField: HTMLTextAreaElement;
    static textFields: HTMLFieldSetElement;

    private name: string;
    private readonly id: string;
    private colorClass: string;
    input: string;

    private row: HTMLDivElement;
    private textArea: HTMLTextAreaElement;
    activeCheckbox: HTMLInputElement;
    optionalCheckboxes: Array<HTMLInputElement>;

    protected constructor(name: string, colorClass: string = "") {
        this.name = name;
        this.id = name.substr(0, name.indexOf(" ")).toLocaleLowerCase();
        this.optionalCheckboxes = new Array<HTMLInputElement>();

        this.colorClass = colorClass.length < 1 ? this.id : colorClass;
    }

    public render(category: Category): void {
        Quirk.textFields.insertAdjacentHTML('beforeend', renderHTML(this.name, this.id, this.colorClass));

        this.row = <HTMLTableRowElement>document.getElementById(this.id + "-row")
        this.textArea = <HTMLTextAreaElement>this.row.getElementsByTagName("textarea")[0];

        // Create toggle checkbox.
        this.activeCheckbox = document.createElement("input");
        this.activeCheckbox.type = "checkbox";
        this.activeCheckbox.checked = true;
        this.activeCheckbox.onchange = () => this.updateVisibility();

        let tr: HTMLTableRowElement = document.createElement("tr");
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', this.getShortName() + ":");

        tr.insertAdjacentElement('beforeend', tdTitle)
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', this.activeCheckbox);
        tr.onclick = () => this.activeCheckbox.click();
        tr.insertAdjacentElement('beforeend', tdCheckBox);

        let toggleCheckboxSet = document.getElementById(category.tabName.toLocaleLowerCase() + "-checkboxes");
        toggleCheckboxSet.insertAdjacentElement('beforeend', tr);
    }

    public getID(): string {
        return this.id;
    }

    public getShortName(): string {
        return this.name; // TODO: Change.
    }

    updateVisibility(): void {
        this.row.hidden = !this.activeCheckbox.checked;

        let optionals = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByClassName(this.id + "Optional");
        for (let i = 0; i < optionals.length; i++) {
            optionals[i].hidden = !this.activeCheckbox.checked;
        }

        let visible = !this.row.hidden

        // Save setting to cookies.
        setCookieBool(this.id, visible, 31);

        // let optionalElement: HTMLTableElement = <HTMLTableElement>document.getElementById(this.category.tabName.toLocaleLowerCase() + "Optionals");
        // if (visible) {
        //     this.update(Quirk.inputField.value);
        //
        //     if (optionalElement.hidden && optionals.length > 0) {
        //         optionalElement.hidden = false;
        //     }
        // } else {
        //     // Check if any other optional checkboxes are visible.
        //     for (let i = 0; i < this.category.optionalCheckboxes.length; i++) {
        //         if (!this.category.optionalCheckboxes[i].hidden) {
        //             return;
        //         }
        //     }
        //
        //     // Hide the table.
        //     optionalElement.hidden = true;
        // }
    }

    update(str: string): void  {
        if (!this.activeCheckbox.checked || str.length < 1) { return; }

        this.input = str;
        this.quirkify();
        this.updateTextField();
    }

    updateTextField(): void {
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
        checkbox.id = label;
        checkbox.checked = defaultValue;
        checkbox.onchange = () => {
            setCookieBool(this.id + checkbox.id, checkbox.checked, 31);
            this.update(Quirk.inputField.value);
        }

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.onclick = () => checkbox.click();
        let tdTitle: HTMLTableCellElement = document.createElement("td");
        tdTitle.insertAdjacentText('beforeend', this.id + " ~ " + label + ":");

        tr.insertAdjacentElement('beforeend', tdTitle);
        tr.title = title;
        tr.className = this.id + "Optional";
        let tdCheckBox: HTMLTableCellElement = document.createElement("td");
        tdCheckBox.insertAdjacentElement('beforeend', checkbox);
        tr.insertAdjacentElement('beforeend', tdCheckBox);
        // document.getElementById(this.category.tabName.toLocaleLowerCase() + "Optionals").insertAdjacentElement('beforeend', tr);

        // this.category.optionalCheckboxes.push(tr);
        this.optionalCheckboxes.push(checkbox);
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
    static matchCase(text: string, pattern: string): string {
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

    changeCase(pattern: string, upper: boolean): void {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function(match) {
            if (upper) {
                return match.toLocaleUpperCase();
            }
            return match.toLocaleLowerCase();
        });
    }

    randReplace(pattern: string, replace: string, prob: number): void {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= prob) {
                // A little hack for capture groups.
                return replace.replace("$1", match);
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
        this.changeCase(`(${eyes})(${mouth})`, true);

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
