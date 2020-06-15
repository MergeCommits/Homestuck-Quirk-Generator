import * as elements from "typed-html"

export function renderHTML(label: string): string {
    let low = label.toLocaleLowerCase();

    return <div id={low + "-tab-content"} class="tab-content">
        <table id={low + "-checkboxes"}>
            <span class="set-header">Select Quirks to Display:</span>
        </table>
        <br />
        <table id={low + "-optional-checkboxes"} hidden="">
            <span class="set-header">Optional Quirks:</span>
        </table>
    </div>;
}