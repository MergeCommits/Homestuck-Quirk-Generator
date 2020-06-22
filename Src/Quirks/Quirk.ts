
import { renderHTML } from "../Templates/QuirkField";
import { setCookieBool } from "../CookieManager";
import { Category } from "../Categories/Category";
import { OptionalCheckbox } from "./OptionalCheckbox";
import { selectAllAndCopy } from "../Copy2Clipboard";

export abstract class Quirk {
    static inputField: HTMLTextAreaElement;
    static textFields: HTMLFieldSetElement;

    private readonly name: string;
    private shortName: string;
    private id: string;
    private readonly colorClass: string;
    input: string;

    private row: HTMLDivElement;
    private textArea: HTMLTextAreaElement;
    public activeCheckbox: HTMLInputElement;
    optionalCheckboxes: Array<OptionalCheckbox>;

    protected constructor(name: string, colorClass: string = "") {
        this.name = name;
        let spaceIndex = this.name.indexOf(" ");
        this.shortName = spaceIndex > 0 ? this.name.substr(0, spaceIndex) : name;

        this.id = this.shortName.toLocaleLowerCase();
        this.optionalCheckboxes = new Array<OptionalCheckbox>();
        this.colorClass = colorClass.length < 1 ? this.id : colorClass;
    }

    public render(category: Category): void {
        Quirk.textFields.insertAdjacentHTML('beforeend', renderHTML(this.name, this.id, this.colorClass));

        this.row = <HTMLTableRowElement>document.getElementById(this.id + "-row")
        this.textArea = this.row.getElementsByTagName("textarea")[0];
        this.textArea.onclick = selectAllAndCopy;

        // Create toggle checkbox.
        this.activeCheckbox = document.createElement("input");
        this.activeCheckbox.classList.add("filled-in");
        this.activeCheckbox.classList.add("checkbox-" + this.getColorClass());
        this.activeCheckbox.type = "checkbox";
        this.activeCheckbox.checked = true;
        this.activeCheckbox.onchange = () => this.updateVisibility(category);

        let td: HTMLTableCellElement = document.createElement("td");
        td.insertAdjacentElement('beforeend', this.activeCheckbox);

        // Checkbox requires a span element adjacent to it for Materialize's theme to work.
        let span = document.createElement("span");
        span.insertAdjacentText('beforeend', this.name);
        td.insertAdjacentElement('beforeend', span);

        let tr: HTMLTableRowElement = document.createElement("tr");
        tr.classList.add("waves-effect");
        tr.classList.add("waves-" + this.getColorClass());
        tr.onclick = () => this.activeCheckbox.click();
        tr.insertAdjacentElement('beforeend', td);

        let toggleCheckboxSet = category.getMainCheckboxSetElement();
        toggleCheckboxSet.insertAdjacentElement('beforeend', tr);

        for (let i = 0; i < this.optionalCheckboxes.length; i++) {
            this.optionalCheckboxes[i].render(category, this.getID(), this);
        }
    }

    public getID(): string {
        return this.id;
    }

    public setShortName(bruh: string): void {
        this.shortName = bruh;
        this.id = bruh.toLocaleLowerCase();
    }

    public getShortName(): string {
        return this.shortName;
    }

    public getColorClass(): string {
        return this.colorClass;
    }

    updateVisibility(category: Category): void {
        this.row.hidden = !this.activeCheckbox.checked;

        let optionals = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName(this.id + "-optional");
        for (let i = 0; i < optionals.length; i++) {
            optionals[i].hidden = !this.activeCheckbox.checked;
        }

        let visible = !this.row.hidden

        // Save setting to cookies.
        setCookieBool(this.id, visible, 31);
        let optionalCheckboxSet: HTMLDivElement = <HTMLDivElement>document.getElementById(category.tabName.toLocaleLowerCase() + "-optional-checkboxes");

        if (visible) {
            this.update(Quirk.inputField.value);

            if (optionalCheckboxSet.hidden && optionals.length > 0) {
                optionalCheckboxSet.hidden = false;
            }
        } else {
            // Check if any other optional checkboxes are visible.
            for (let i = 0; i < category.optionalCheckboxes.length; i++) {
                if (!category.optionalCheckboxes[i].hidden) {
                    return;
                }
            }

            // Hide the table.
            optionalCheckboxSet.hidden = true;
        }
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

    addCheckbox(label: string, title: string, defaultValue: boolean = false): OptionalCheckbox {
        let checkbox: OptionalCheckbox = new OptionalCheckbox(label, title, defaultValue)
        this.optionalCheckboxes.push(checkbox);
        return checkbox;
    }

    abstract quirkify(): void;

    protected lowerCase(pattern: string = ""): void {
        if (pattern.length < 1) {
            this.input = this.input.toLocaleLowerCase();
        } else {
            let reg: RegExp = new RegExp(pattern, "gi");
            this.input = this.input.replace(reg, function(match) {
                return match.toLocaleLowerCase();
            });
        }
    }

    protected upperCase(pattern: string = ""): void {
        if (pattern.length < 1) {
            this.input = this.input.toLocaleUpperCase();
        } else {
            let reg: RegExp = new RegExp(pattern, "gi");
            this.input = this.input.replace(reg, function(match) {
                return match.toLocaleUpperCase();
            });
        }
    }

    protected prefix(str: string): void {
        this.input = str + this.input;
    }

    protected suffix(str: string): void {
        this.input += str;
    }

    protected replaceString(pattern: string, replace: string): void {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, replace);
    }

    protected replaceCaseInsensitive(pattern: string, replace: string): void {
        let reg: RegExp = new RegExp(pattern, "gi");
        this.input = this.input.replace(reg, replace);
    }

    protected replaceMatchCase(pattern: string, replace: string): void {
        let reg: RegExp = new RegExp(pattern, "gi");
        this.input = this.input.replace(reg, function(match) {
            return Quirk.matchCase(replace, match);
        });
    }

    protected replaceWord(pattern: string, replace: string) {
        this.replaceString("\\b" + pattern + "\\b", replace);
    }

    protected replaceWordMatchCase(pattern: string, replace: string) {
        this.replaceMatchCase("\\b" + pattern + "\\b", replace);
    }

    // Function taken from https://stackoverflow.com/a/17265031/6446221.
    private static matchCase(text: string, pattern: string): string {
        // If the entire text is uppercase then uppercase the whole pattern regardless of lengths.
        if (pattern.toUpperCase() === pattern) {
            return text.toUpperCase();
        }

        let result = '';

        for (let i = 0; i < text.length; i++) {
            let c = text.charAt(i);
            let p = pattern.charCodeAt(i);

            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }

        return result;
    }

    randomReplace(pattern: string, replace: string, prob: number): void {
        let reg: RegExp = new RegExp(pattern, "g");
        this.input = this.input.replace(reg, function(match) {
            if (Math.random() <= prob) {
                return replace;
            }
            return match;
        });
    }

    // Troll-specific stuff below.

    // $1 - capture group for eyes.
    // $2 - capture group for mouth.
    replaceEmotes(replace: string): void {
        let eyes = "[:;]";
        let mouth = "[\\)\\(Dd]";
        this.upperCase(`(${eyes})(${mouth})`);

        let reg: RegExp = new RegExp(`(${eyes})(${mouth})`, "gi");
        this.input = this.input.replace(reg, replace);
    }

    applyCatPuns(): void {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("for", "fur");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("(per|pre)", "pur");
    }

    applyFishPuns(): void {
        this.replaceMatchCase("kill", "krill");
        this.replaceMatchCase("well", "whale");
        this.replaceMatchCase("fine", "fin");
        this.replaceMatchCase("see", "sea");
        this.replaceMatchCase("should", "shoald");
        this.replaceMatchCase("kid", "squid");
        this.replaceMatchCase("sure", "shore");
        this.replaceMatchCase("crap", "carp");
        this.replaceMatchCase("(what are|what do)", "water");
    }

    applyTiaraEmotes(): void {
        this.replaceEmotes("38$2");
    }

    censorSwears(extreme: boolean = false): void {
        this.replaceWordMatchCase("fuck", "f*ck");
        this.replaceWordMatchCase("bitch", "b*tch");
        this.replaceWordMatchCase("shit", "sh*t");
        this.replaceWordMatchCase("damn", "d*mn");
        this.replaceWordMatchCase("crap", "cr*p");

        if (extreme) {
            this.replaceMatchCase("whoops", "wh**ps");
            this.replaceMatchCase("silly", "s*lly");
            this.replaceMatchCase("shoot", "sh**t");
            this.replaceMatchCase("fidging", "f*dging");
        }
    }
}
