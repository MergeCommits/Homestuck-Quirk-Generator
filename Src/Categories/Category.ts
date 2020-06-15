import { Quirk } from "../Quirks/Quirk";
import { setCookieStr } from "../CookieManager";

export class Category {
    tabName: string;
    public quirks: Array<Quirk>;
    optionalCheckboxes: Array<HTMLTableRowElement>;

    constructor(tabName: string, onlyBtnName: string) {
        this.tabName = tabName;
        this.quirks = new Array<Quirk>();
        this.optionalCheckboxes = new Array<HTMLTableRowElement>();
    }

    public render() {
        let low: string = this.tabName.toLocaleLowerCase();

        // Button to select this category only.
        let btn = document.createElement("input");
        btn.type = "button";
        btn.value = this.tabName; // TODO: Button name.
        btn.onclick = (e) => this.toggleCat(true, low);
        document.getElementById("button-list").insertAdjacentElement('beforeend', btn);

        // The tab itself.
        let anchor = document.createElement("a");
        anchor.className = "tab-links";
        anchor.id = low + "Tab";
        anchor.text = this.tabName;
        anchor.onclick = Category.openTab;

        let li = document.createElement("li");
        li.insertAdjacentElement('beforeend', anchor);
        document.getElementById("tab").insertAdjacentElement("beforeend", li);

        // The tab's content.
        let checkboxes = document.createElement("table");
        checkboxes.id = low + "Checkboxes";
        checkboxes.cellSpacing = "0px";
        checkboxes.cellPadding = "3px";
        let span = document.createElement("span");
        span.appendChild(document.createTextNode("Select Quirks to Display:"));
        span.className = "newSet";
        checkboxes.insertAdjacentElement('beforeend', span);


        let checkboxesOP = document.createElement("table");
        checkboxesOP.id = low + "Optionals";
        checkboxesOP.hidden = true;
        checkboxesOP.cellSpacing = "0px";
        checkboxesOP.cellPadding = "3px";
        let spanOp = document.createElement("span");
        spanOp.appendChild(document.createTextNode("Optional Quirks:"));
        spanOp.className = "newSet";
        checkboxesOP.insertAdjacentElement('beforeend', spanOp);

        let div = document.createElement("div");
        div.id = low + "TabContent";
        div.className = "tab-content";
        div.insertAdjacentElement("beforeend", checkboxes);
        div.insertAdjacentHTML("beforeend", "<br />");
        div.insertAdjacentElement("beforeend", checkboxesOP);
        document.getElementById("tab").insertAdjacentElement('afterend', div);

        for (let i = 0; i < this.quirks.length; i++) {
            this.quirks[i].render(this);
        }
    }

    // Opening tabs for the floating-box.
    static openTab(event: MouseEvent): any {
        // Get all elements with class="tab-content" and hide them.
        let tabContent: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("tab-content") as HTMLCollectionOf<HTMLElement>;

        let i: number = 0;
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // Get all elements with class="tab-links" and remove the class "active."
        let tabLinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tab-links");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        let id: string = (<HTMLElement>event.currentTarget).id;
        setCookieStr("currTab", id, 31);
        document.getElementById(id + "Content").style.display = "block";
        (<HTMLElement>event.currentTarget).className += " active";
    }

    toggleCat(finalState: boolean, tabName: string, disableOthers: boolean = true) {
        if (disableOthers) {
            Category.toggleAll(false);
            document.getElementById(tabName + "Tab").click();
        }

        for (let i = 0; i < this.quirks.length; i++) {
            // Don't just set the checked boolean directly because that prevents event firing.
            if (this.quirks[i].activeCheckbox.checked != finalState) {
                this.quirks[i].activeCheckbox.click();
            }
        }
    }

    static toggleAll(finalState: boolean): void {
        for (let i = 0; i < list.length; i++) {
            list[i].toggleCat(finalState, list[i].tabName.toLocaleLowerCase(), false);
        }
    }
}

export let list: Array<Category> = new Array<Category>();