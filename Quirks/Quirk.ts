export abstract class Quirk {
    static trollField: HTMLFieldSetElement;

    firstName: string;
    lastName: string;
    input: string;

    textArea: HTMLTextAreaElement;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

        this.textArea = document.createElement("textarea");
        this.textArea.className = "textOutput";
        this.textArea.id = firstName.toLocaleLowerCase() + "Text";
        this.textArea.textContent = "test";

        let label: HTMLLabelElement = document.createElement("label");
        label.insertAdjacentText('afterbegin', this.firstName + ":");

        let div: HTMLDivElement = document.createElement("div");
        div.insertAdjacentElement('afterbegin', label);
        div.insertAdjacentElement('beforeend', this.textArea);

        Quirk.trollField.insertAdjacentElement('beforeend', div);
    }

    update(str: string): void  {
        if (str.length < 1) { return; }

        this.input = str;
    }

    abstract quirkify(): void;
}
