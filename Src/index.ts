import { Category } from "./Categories/Category";
import { populateTabs } from "./Quirks/QuirkLoader";
import { loadCookiesData } from "./CookieManager";

document.addEventListener('DOMContentLoaded', function() {
    addButtonListeners();
    populateTabs();
    initMaterialize();

    // Tab pressing requires Materialize loaded first.
    loadCookiesData();
});

function initMaterialize(): void {
    M.AutoInit();
    var elem = document.querySelector('.collapsible.expandable');
    M.Collapsible.init(elem, {
        accordion: false
    });
}

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
    document.getElementById("chkToggleC2PTR").onclick = () => document.getElementById("chkToggleC2P").click();
    document.getElementById("btnThemeToggle").onclick = toggleTheme;
    document.getElementById("btnAll").onclick = () => Category.toggleAll(true);
    document.getElementById("btnNone").onclick = () => Category.toggleAll(false);
}