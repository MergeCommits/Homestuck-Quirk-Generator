import { Aradia } from "./Quirks/Alternia/Aradia";
import { Quirk } from "./Quirks/Quirk";
import * as Category from "./Quirks/Category";

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
    addTab(Category.CAT_ALT);
    addTab(Category.CAT_BEF);
    addTab(Category.CAT_CHE);

    document.getElementById("alterniaTab").click();
}

let alternianTrolls: Array<Quirk> = new Array<Quirk>();

function loadQuirkFields(): void {
    (<HTMLTextAreaElement>document.getElementById("textInput")).oninput = updateText;
    Quirk.textFields = <HTMLFieldSetElement>document.getElementById("textFields");
    alternianTrolls.push(new Aradia());
}

function updateText(event: MouseEvent): void {
    let inputStr: string = (<HTMLTextAreaElement>event.currentTarget).value;
    for (let i = 0; i < alternianTrolls.length; i++) {
        alternianTrolls[i].update(inputStr);
    }
}

function addTab(catName: string): void {
    let low: string = catName.toLocaleLowerCase();

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
    let span = document.createElement("span");
    span.appendChild(document.createTextNode("Select Quirks to Display:"));
    span.className = "newSet";
    checkboxes.insertAdjacentElement('beforeend', span);


    let checkboxesOP = document.createElement("table");
    checkboxesOP.id = low + "Optionals";
    let spanOp = document.createElement("span");
    spanOp.appendChild(document.createTextNode("Optional Quirks:"));
    spanOp.className = "newSet";
    checkboxesOP.insertAdjacentElement('beforeend', spanOp);

    let div = document.createElement("div");
    div.id = low + "TabContent";
    div.className = "tabcontent";
    div.insertAdjacentElement("beforeend", checkboxes);
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