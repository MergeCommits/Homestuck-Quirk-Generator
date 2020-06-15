import * as elements from "typed-html"

export function renderHTML(label: string, id: string = "", colorClass: string): string {
    const sampleText = "The quick brown fox jumps over the lazy dog. :D";
    if (id.length < 1) {
        id = label.substr(0, label.indexOf(" "));
    }

    return <div id={id + "-row"}>
            <label>{label}:</label>
            <textarea class={colorClass + "-color text-output"} readonly="readonly" style="height: 46px;">{sampleText}</textarea>
        </div>;
}