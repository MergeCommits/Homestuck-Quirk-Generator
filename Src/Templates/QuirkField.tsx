import * as elements from "typed-html"

export function renderHTML(label: string, id: string = "", colorClass: string): string {
    if (id.length < 1) {
        id = label.substr(0, label.indexOf(" "));
    }

    return <div class="row">
        <div id={id + "-row"} class="col s12">
            <label>{label}:</label>
            <textarea class={colorClass + "-color text-output materialize-textarea"} readonly="readonly" style="height: 46px;"/>
        </div>
    </div>;
}