import { list } from "./Categories/Category";

export function loadCookiesData(): void {
    // Enabled/disabled checkboxes.
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list[i].quirks.length; j++) {
            let id = list[i].quirks[j].getID();
            if (getCookie(id, "true") != "true") {
                list[i].quirks[j].activeCheckbox.click();
            }
            for (let k = 0; k < list[i].quirks[j].optionalCheckboxes.length; k++) {
                let cookieName = id + list[i].quirks[j].optionalCheckboxes[k].id;
                let defVal = list[i].quirks[j].optionalCheckboxes[k].checked.toString();
                if (getCookie(cookieName, defVal) != defVal) {
                    list[i].quirks[j].optionalCheckboxes[k].click();
                }
            }
        }
    }

    // Selected tab.
    let tabId: string = getCookie("currTab", "alterniaTab");
    document.getElementById(tabId).click();
}

export function setCookieBool(cname: string, cvalue: boolean, exdays: number) : void {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function setCookieStr(cname: string, cvalue: string, exdays: number) : void {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string, defaultValue: string): string {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return defaultValue;
}