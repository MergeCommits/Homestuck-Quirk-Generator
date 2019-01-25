import { Quirk } from "./Quirks/Quirk";
import * as Category from "./Quirks/Category";
import { Aradia } from "./Quirks/Alternia/Aradia";
import { Tavros } from "./Quirks/Alternia/Tavros";

document.addEventListener('DOMContentLoaded', function() {
    loadTabs();
    loadQuirkFields();

    // Apply the autosize function to all textarea elements.
    document.querySelector('textarea').addEventListener('keydown', function() {
        let textareaArray = <HTMLCollectionOf<HTMLTextAreaElement>>document.getElementsByClassName('textOutput');

        for (let i = 0; i < textareaArray.length; i++) {
            autosize(textareaArray[i]);
        }
        autosize(document.querySelector('textarea'));
    });

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

function loadTabs(): void {
    // Load buttons here also.
    document.getElementById("btnAll").onclick = (e) => toggleAll(true);
    document.getElementById("btnNone").onclick = (e) => toggleAll(false);

    addTab(Category.CAT_ALT, "Alternian Trolls only", alterniaOnly);
    addTab(Category.CAT_BEF, "Beforan Trolls only", beforusOnly);
    addTab(Category.CAT_CHE, "Cherubs only", cherubOnly);

    document.getElementById("alterniaTab").click();
}

let alternianTrolls: Array<Quirk> = new Array<Quirk>();
let beforanTrolls: Array<Quirk> = new Array<Quirk>();
let cherubs: Array<Quirk> = new Array<Quirk>();

function loadQuirkFields(): void {
    (<HTMLTextAreaElement>document.getElementById("textInput")).oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("textFields");

    alternianTrolls.push(new Aradia());
    alternianTrolls.push(new Tavros())
}

function toggleAll(finalState: boolean): void {
    for (let i = 0; i < alternianTrolls.length; i++) {
        // Don't just set it to false because that prevents event firing.
        if (alternianTrolls[i].activeCheckbox.checked != finalState) {
            alternianTrolls[i].activeCheckbox.click();
        }
    }

    for (let i = 0; i < beforanTrolls.length; i++) {
        if (beforanTrolls[i].activeCheckbox.checked != finalState) {
            beforanTrolls[i].activeCheckbox.click();
        }
    }

    for (let i = 0; i < cherubs.length; i++) {
        if (cherubs[i].activeCheckbox.checked != finalState) {
            cherubs[i].activeCheckbox.click();
        }
    }
}

function alterniaOnly(event: MouseEvent): void {
    document.getElementById("alterniaTab").click();
    for (let i = 0; i < alternianTrolls.length; i++) {
        // Don't just set it to true because that prevents event firing.
        if (!alternianTrolls[i].activeCheckbox.checked) {
            alternianTrolls[i].activeCheckbox.click();
        }
    }
}

function beforusOnly(event: MouseEvent): void {
    document.getElementById("beforusTab").click();
    for (let i = 0; i < beforanTrolls.length; i++) {
        // Don't just set it to true because that prevents event firing.
        if (!beforanTrolls[i].activeCheckbox.checked) {
            beforanTrolls[i].activeCheckbox.click();
        }
    }
}

function cherubOnly(event: MouseEvent): void {
    document.getElementById("cherubsTab").click();
    for (let i = 0; i < cherubs.length; i++) {
        // Don't just set it to true because that prevents event firing.
        if (!cherubs[i].activeCheckbox.checked) {
            cherubs[i].activeCheckbox.click();
        }
    }
}

function updateText(event: MouseEvent): void {
    let inputStr: string = (<HTMLTextAreaElement>event.currentTarget).value;
    for (let i = 0; i < alternianTrolls.length; i++) {
        alternianTrolls[i].update(inputStr);
    }
}

function addTab(catName: string, btnName: string, eventFunc: any): void {
    let low: string = catName.toLocaleLowerCase();

    // Button to select this category only.
    let btn = document.createElement("input");
    btn.type = "button";
    btn.value = btnName;
    btn.onclick = eventFunc; // This is an event function trust me.
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

// Dynamically increase the height of a textarea.
function autosize(element: HTMLTextAreaElement): void {
    setTimeout(function() {
        element.style.cssText = 'height: auto; padding: 0';
        element.style.cssText = 'height:' + element.scrollHeight + 'px';
    }, 0);
}