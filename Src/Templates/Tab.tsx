import * as elements from "typed-html"

export function renderHTML(label: string): string {
    let low = label.toLocaleLowerCase();

    return <li>
        <div class="collapsible-header waves-effect"><i class="material-icons">filter_drama</i>{label}</div>
        <div class="collapsible-body tab-content">
            <span class="set-header">Select Quirks to Display:</span>
            <table id={low + "-checkboxes"} class="striped">
            </table>
            <br />
            <div id={low + "-optional-checkboxes"} class="striped" hidden="">
                <span class="set-header">Optional Quirks:</span>
                <table id={low + "-optional-table"} />
            </div>
        </div>
    </li>;
}
