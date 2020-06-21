import { Category } from "./Categories/Category";
import { populateTabs } from "./Quirks/QuirkLoader";
import { loadCookiesData } from "./CookieManager";

document.addEventListener('DOMContentLoaded', function() {
    populateTabs();
    M.AutoInit();
    loadCookiesData(); // Tab pressing requires Materialize loaded first.
    addButtonListeners();
});

function toggleTheme(evt: MouseEvent) {
    const darkText = "Dark Mode";
    const lightText = "Light Mode";

    // Light or dark?
    let btn = <HTMLAnchorElement>document.getElementById("btnThemeToggle");
    let prevDark: boolean = btn.innerText.toLocaleUpperCase() == lightText.toLocaleUpperCase();
    let body = document.getElementsByTagName("body")[0]; // Get main body.

    if (!prevDark) {
        body.className = "t-dark";
        btn.innerText = lightText;
    } else {
        body.className = "";
        btn.innerText = darkText;
    }
}

function addButtonListeners(): void {
    // When the sidebar is below the main content the tooltips look better above their respective element.
    // So change that dynamically here.
    window.addEventListener("resize", function () {
        let sidebar = document.getElementsByClassName("sidebar")[0];
        let width: number = sidebar.clientWidth / window.innerWidth;
        repositionTooltips(width < 0.5);
    });
    window.dispatchEvent(new Event("resize")); // Run it on load.

    document.getElementById("btnThemeToggle").onclick = toggleTheme;
    document.getElementById("btnAll").onclick = () => Category.toggleAll(true);
    document.getElementById("btnNone").onclick = () => Category.toggleAll(false);

    document.getElementById("toggleLabels").onchange = function (e) {
        let enable = <HTMLInputElement>e.target;
        let elements = <HTMLCollectionOf<HTMLElement>>document.getElementsByClassName("text-output-title");
        for (let i = 0; i < elements.length; i++) {
            elements[i].hidden = enable.checked;
        }
    };
}

function repositionTooltips(sidebarIsActuallyOnRightSide: boolean) {
    let tooltipElements = document.querySelectorAll("[data-position]");
    for (let i = 0; i < tooltipElements.length; i++) {
        if (sidebarIsActuallyOnRightSide) {
            tooltipElements[i].setAttribute("data-position", "left");
        } else {
            tooltipElements[i].setAttribute("data-position", "top");
        }
    }
}