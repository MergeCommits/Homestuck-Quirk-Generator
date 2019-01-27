import { Quirk } from "./Quirk";

export class Category {
    tabName: string;
    quirks: Array<Quirk>;
    optionalCheckboxes: Array<HTMLTableRowElement>;

    constructor(tabName: string, onlyBtnName: string) {
        this.tabName = tabName;
        this.addTab(this.tabName, onlyBtnName)
        this.quirks = new Array<Quirk>();
        this.optionalCheckboxes = new Array<HTMLTableRowElement>();
    }

    addQuirk(quirk: Quirk) {
        this.quirks.push(quirk);
    }

    addTab(catName: string, btnName: string): void {
        let low: string = catName.toLocaleLowerCase();

        // Button to select this category only.
        let btn = document.createElement("input");
        btn.type = "button";
        btn.value = btnName;
        btn.onclick = (e) => this.toggleCat(true, low);
        document.getElementById("buttonList").insertAdjacentElement('beforeend', btn);

        // The tab itself.
        let anchor = document.createElement("a");
        anchor.className = "tablinks";
        anchor.id = low + "Tab";
        anchor.text = catName;
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
        div.className = "tabcontent";
        div.insertAdjacentElement("beforeend", checkboxes);
        div.insertAdjacentHTML("beforeend", "<br />");
        div.insertAdjacentElement("beforeend", checkboxesOP);
        document.getElementById("tab").insertAdjacentElement('afterend', div);
    }

    // Opening tabs for the floatingBox.
    static openTab(event: MouseEvent): any {
        // Get all elements with class="tabcontent" and hide them.
        let tabcontent: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;

        let i: number = 0;
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active."
        let tablinks: HTMLCollectionOf<Element> = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the link that opened the tab
        let id: string = (<HTMLElement>event.currentTarget).id;
        document.getElementById(id + "Content").style.display = "block";
        (<HTMLElement>event.currentTarget).className += " active";
    }

    toggleCat(finalState: boolean, tabName: string, disableOthers: boolean = true) {
        if (disableOthers) {
            Category.toggleAll(false);
            document.getElementById(tabName + "Tab").click();
        }

        for (let i = 0; i < this.quirks.length; i++) {
            // Don't just set it to a flag because that prevents event firing.
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

    static loadTabs(): void {
        // Load buttons here also.
        document.getElementById("btnAll").onclick = (e) => Category.toggleAll(true);
        document.getElementById("btnNone").onclick = (e) => Category.toggleAll(false);

        CAT_ALT = new Category("Alternia", "Alternian Trolls only");
        CAT_BEF = new Category("Beforus", "Beforan Trolls only");
        CAT_CHE = new Category("Cherubs", "Cherubs only");

        list.push(CAT_ALT);
        list.push(CAT_BEF);
        list.push(CAT_CHE);

        document.getElementById("alterniaTab").click();
    }
}

export let CAT_ALT: Category;
export let CAT_BEF: Category;
export let CAT_CHE: Category;

export let list: Array<Category> = new Array<Category>();