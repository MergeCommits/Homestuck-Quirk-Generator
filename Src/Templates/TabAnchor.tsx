import * as elements from "typed-html"

export function renderHTML(label: string): string {
    return <li class="tab col m5ths s6">
        <a id={label.toLocaleLowerCase( ) + "-tab-anchor"} draggable="false" href={"#" + label.toLocaleLowerCase( ) + "-tab"}>{label}</a>
    </li>;
}