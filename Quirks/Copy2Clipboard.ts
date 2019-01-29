/* Cool Javascript Copy to Clipboard Crossbrowser
Written by Jeff Baker on March 18, 2016, modified by me.
Copyright 2016 by Jeff Baker -
http://www.seabreezecomputers.com/tips/copy2clipboard.htm
*/

function tooltip(el: HTMLElement, message: string) {
    let tooltip: HTMLElement;
    if (!document.getElementById("copyTooltip"))
    {
        tooltip = document.createElement('div');
        tooltip.id = "copyTooltip";
        document.body.appendChild(tooltip);
    }
    else
    {
        tooltip = document.getElementById("copyTooltip")
    }

    tooltip.style.opacity = "1";
    tooltip.innerHTML = message;
    setTimeout(function() { tooltip.style.opacity = "0"; }, 2000);
}

export function select_all_and_copy(evt: MouseEvent) {
    // Copy textarea, pre, div, etc.
    let el: any = evt.currentTarget;

    if (!(<HTMLInputElement>document.getElementById("chkToggleC2P")).checked || el.value.length < 1) {
        return;
    }

    // Below doesn't compile with TypeScript since it's non-standard.
    // if ((document.body.createTextRange) {
    //     // IE
    //     let textRange = document.body.createTextRange();
    //     textRange.moveToElementText(el);
    //     textRange.select();
    //     textRange.execCommand("Copy");
    //     tooltip(el, "Copied!");
    // }
    if (window.getSelection && document.createRange) {
        let editable = el.contentEditable; // Record contentEditable status of element
        let readOnly = el.readOnly; // Record readOnly status of element
        el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
        el.readOnly = false; // iOS will not select in a read only form element

        let range = document.createRange();
        range.selectNodeContents(el);
        let sel = window.getSelection();
        // sel.removeAllRanges();
        sel.addRange(range);

        // Does not work for Firefox if a textarea or input
        // Firefox will only select a form element with select()
        if (el.nodeName === "TEXTAREA" || el.nodeName === "INPUT") {
            el.select();
        }

        // iOS only selects "form" elements with SelectionRange
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            el.setSelectionRange(0, 999999);
        }

        // Restore previous contentEditable and readOnly states.
        el.contentEditable = editable;
        el.readOnly = readOnly;

        if (document.queryCommandSupported("copy")) {
            let successful = document.execCommand("copy");
            if (successful) {
                tooltip(el, "Copied to clipboard.");
            } else {
                tooltip(el, "Press CTRL+C to copy");
            }
        } else {
            if (!navigator.userAgent.match(/ipad|ipod|iphone|android|silk/i)) {
                tooltip(el, "Press CTRL+C to copy");
            }
        }
    }
} // end function select_all_and_copy(el)