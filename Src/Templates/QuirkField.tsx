import * as elements from "typed-html"

export function renderHTML(label: string, id: string = "", colorClass: string): string {
    if (id.length < 1) {
        id = label.substr(0, label.indexOf(" "));
    }

    return <tr id={id + "-row"}>
        <td>
            <span class="text-output-title">{label}:</span>
            <textarea class={colorClass + "-color text-output"} readonly="readonly" style="height: 23px;"/>
        </td>
    </tr>;
}