import * as elements from "typed-html"

export function renderHTML(label: string): string {
    return <li>
        <a class="tab-links" id={label.toLocaleLowerCase( ) + "-tab"}>{label}</a>
    </li>;
}