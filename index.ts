import { Quirk } from "./Quirks/Quirk";
import * as Category from "./Quirks/Category";
import { Aradia } from "./Quirks/Alternia/Aradia";
import { Tavros } from "./Quirks/Alternia/Tavros";
import { Sollux } from "./Quirks/Alternia/Sollux";
import { Karkat } from "./Quirks/Alternia/Karkat";

document.addEventListener('DOMContentLoaded', function() {
    loadTabs();
    loadQuirkFields();

    // // Have they accessed the page before?
    // var previousTime = isBool(localStorage.getItem("previousTimeSave"));

    // // Reload their previous options then.
    // if (previousTime) {
    //     var checkboxes = document.getElementsByName('toggleBox');

    //     for(var i = 0; i < checkboxes.length; i++) {
    //         var saveName = "ID " + JSON.stringify(i);
    //         checkboxes[i].checked = isBool(localStorage.getItem(saveName));
    //     }
    // } else {
    //     previousTime = true;
    // }
});

function updateText(event: MouseEvent): void {
    let input = <HTMLTextAreaElement>event.currentTarget;
    let inputStr: string = input.value;
    Quirk.autoSize(input);

    // Wipe all inputs if empty. (stops deleted text from not updating the outputs)
    if (inputStr.length < 1) {
        let txts = <HTMLCollectionOf<HTMLTextAreaElement>>document.getElementsByClassName("textOutput");
        for (let i = 0; i < txts.length; i++) {
            txts[i].value = "";
            Quirk.autoSize(txts[i]);
        }

        return;
    }

    for (let i = 0; i < alternianTrolls.length; i++) {
        alternianTrolls[i].update(inputStr);
    }
}

function loadTabs(): void {
    // Load buttons here also.
    document.getElementById("btnAll").onclick = (e) => toggleAll(true);
    document.getElementById("btnNone").onclick = (e) => toggleAll(false);

    addTab(Category.CAT_ALT, "Alternian Trolls only", alternianTrolls);
    addTab(Category.CAT_BEF, "Beforan Trolls only", beforanTrolls);
    addTab(Category.CAT_CHE, "Cherubs only", cherubs);

    document.getElementById("alterniaTab").click();
}

let alternianTrolls: Array<Quirk> = new Array<Quirk>();
let beforanTrolls: Array<Quirk> = new Array<Quirk>();
let cherubs: Array<Quirk> = new Array<Quirk>();

function loadQuirkFields(): void {
    (<HTMLTextAreaElement>document.getElementById("textInput")).oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("textFields");

    alternianTrolls.push(new Aradia());
    alternianTrolls.push(new Tavros());
    alternianTrolls.push(new Sollux());
    alternianTrolls.push(new Karkat());
}

function toggleCat(category: Array<Quirk>, finalState: boolean, tabName: string) {
    if (finalState) {
        toggleAll(false);
        document.getElementById(tabName + "Tab").click();
    }

    for (let i = 0; i < category.length; i++) {
        // Don't just set it to a flag because that prevents event firing.
        if (category[i].activeCheckbox.checked != finalState) {
            category[i].activeCheckbox.click();
        }
    }
}

function toggleAll(finalState: boolean): void {
    toggleCat(alternianTrolls, finalState, Category.CAT_ALT.toLocaleLowerCase());
    toggleCat(alternianTrolls, finalState, Category.CAT_BEF.toLocaleLowerCase());
    toggleCat(alternianTrolls, finalState, Category.CAT_CHE.toLocaleLowerCase());
}

function addTab(catName: string, btnName: string, arr: Array<Quirk>): void {
    let low: string = catName.toLocaleLowerCase();

    // Button to select this category only.
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = btnName;
    btn.onclick = (e) => toggleCat(arr, true, low);
    document.getElementById("buttonList").insertAdjacentElement('beforeend', btn);

    // The tab itself.
    let anchor = document.createElement("a");
    anchor.className = "tablinks";
    anchor.id = low + "Tab";
    anchor.text = catName;
    anchor.onclick = openTab;

    let li = document.createElement("li");
    li.insertAdjacentElement('beforeend', anchor);
    document.getElementById("tab").insertAdjacentElement("beforeend", li);

    // The tab's content.
    let checkboxes = document.createElement("table");
    checkboxes.id = low + "Checkboxes";
    checkboxes.cellSpacing = "0px";
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Select Quirks to Display:"));
    span.className = "newSet";
    checkboxes.insertAdjacentElement('beforeend', span);


    let checkboxesOP = document.createElement("table");
    checkboxesOP.id = low + "Optionals";
    checkboxesOP.cellSpacing = "0px";
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
function openTab(event: MouseEvent): any {
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