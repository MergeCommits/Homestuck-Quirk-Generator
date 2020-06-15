import { Category } from "./Category";
import { loadQuirkElements } from "./Quirks/QuirkLoader";
import { loadCookiesData } from "./CookieManager";

document.addEventListener('DOMContentLoaded', function() {
    addButtonListeners();
    Category.loadTabs();
    loadQuirkElements();
    loadCookiesData();

    // Add IOS-specific class to floating box on the respective device.
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        document.getElementById("floating-box").classList.add("floating-box-IOS");
    }
});

function toggleTheme(evt: MouseEvent) {
    const darktxt = "Dark Mode";
    const lighttxt = "Light Mode";

    // Light or dark?
    let btn = <HTMLInputElement>document.getElementById("btnThemeToggle");
    let prevDark: boolean = btn.value == darktxt;
    let body = document.getElementsByTagName("body")[0]; // Get main body.

    if (!prevDark) {
        body.className = "t-dark";
        btn.value = darktxt;
    } else {
        body.className = "";
        btn.value = lighttxt;
    }
}

function addButtonListeners(): void {
    document.getElementById("chkToggleC2PTR").onclick = () => document.getElementById("chkToggleC2P").click();
    document.getElementById("btnThemeToggle").onclick = toggleTheme;
    document.getElementById("btnAll").onclick = () => Category.toggleAll(true);
    document.getElementById("btnNone").onclick = () => Category.toggleAll(false);
}