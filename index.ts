run();

function run() {
    console.log("Hello world!");
}

// Opening tabs for the floatingBox.
function openTab(evt: Event, tabName: string) {
    // Get all elements with class="tabcontent" and hide them.
    let tabcontent = document.getElementsByClassName("tabcontent") as HTMLCollectionOf<HTMLElement>;

    let i: number = 0;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active."
    let tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    (<HTMLButtonElement>evt.currentTarget).className += " active";
}

// Dynamically increase the height of a textarea.
function autosize(el) {
    setTimeout(function() {
        el.style.cssText = 'height: auto; padding: 0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}