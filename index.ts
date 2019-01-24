import { Aradia } from "./Quirks/Alternia/Aradia";
import { Quirk } from "./Quirks/Quirk";

function run() {
    console.log("Hello world!");
    alert("IRAN1");
}

document.addEventListener('DOMContentLoaded', function() {
    Quirk.trollField = <HTMLFieldSetElement>document.getElementById("trollField");
    new Aradia();
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

    let altTab = <HTMLElement>document.getElementById("alterniaTab");
    altTab.onclick = openTab;
    // altTab.addEventListener('click', openTab(event));

    let befTab = <HTMLElement>document.getElementById("beforusTab");
    befTab.onclick = openTab;
    // befTab.addEventListener('click', openTab(befTab, 'Beforus'));

    altTab.click();
});

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