import * as elements from "typed-html"

export function renderHTML(label: string): string {
    let low = label.toLocaleLowerCase();

    return <div id={low + "-tab"} class="tab-content col s12" style="display: none">
        <span class="set-header">Select Quirks to Display:</span>
        <table id={low + "-checkboxes"}>
        </table>
        <br />
        <div id={low + "-optional-checkboxes"} hidden="">
            <span class="set-header">Optional Quirks:</span>
            <table id={low + "-optional-table"} />
        </div>
    </div>;
}
