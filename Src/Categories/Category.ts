import { Quirk } from "../Quirks/Quirk";
import { setCookieStr } from "../CookieManager";
import {renderHTML as renderTab} from "../Templates/Tab";
import {renderHTML as renderAnchor} from "../Templates/TabAnchor";

export class Category {
    tabName: string;
    onlyButtonName: string;
    public quirks: Array<Quirk>;
    optionalCheckboxes: Array<HTMLTableRowElement>;

    constructor(tabName: string, onlyBtnName: string) {
        this.tabName = tabName;
        this.onlyButtonName = onlyBtnName;
        this.quirks = new Array<Quirk>();
        this.optionalCheckboxes = new Array<HTMLTableRowElement>();
    }

    public render() {
        let low: string = this.tabName.toLocaleLowerCase();

        // Button to select this category only.
        let btn = document.createElement("input");
        btn.type = "button";
        btn.value = this.onlyButtonName;
        // TODO: Re-implement.
        // btn.onclick = (e) => this.toggleCat(true, low);
        document.getElementById("button-list").insertAdjacentElement('beforeend', btn);

        // The tab anchor.
        document.getElementById("tab-anchors").insertAdjacentHTML("beforeend", renderAnchor(this.tabName));
        // Add event to anchor.
        (<HTMLAnchorElement>document.getElementById(this.tabName.toLocaleLowerCase() + "-tab-anchor")).onclick = Category.openTabCallback;

        // The tab's content.
        document.getElementById("tab-section").insertAdjacentHTML('beforeend', renderTab(this.tabName));

        for (let i = 0; i < this.quirks.length; i++) {
            this.quirks[i].render(this);
        }
    }

    public getMainCheckboxSetElement(): HTMLElement {
        return document.getElementById(this.tabName.toLocaleLowerCase() + "-checkboxes");
    }

    public getOptionalCheckboxSetElement(): HTMLElement {
        return document.getElementById(this.tabName.toLocaleLowerCase() + "-optional-table");
    }

    static openTabCallback(event: MouseEvent): any {
        let id: string = (<HTMLElement>event.currentTarget).id;
        setCookieStr("currentTab", id, 31);
    }

    toggleCat(finalState: boolean, tabName: string, disableOthers: boolean = true) {
        if (disableOthers) {
            Category.toggleAll(false);
            document.getElementById(tabName + "-tab").click();
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