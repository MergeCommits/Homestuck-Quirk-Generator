import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const tavrosColor = "#A15000";

export default class Tavros extends Quirk {
  public constructor() {
    super("Tavros Nitram", alterniaTag, tavrosColor);
  }

  protected quirkify(): void {
    this.quirkText = tavrosify(this.quirkText);
    this.replaceEmotes("}$1$2");
  }
}

export function tavrosify(text: string): string {
  text = text.toUpperCase();

  const arr: string[] = text.split(/[,.?!]/g);
  for (let i = 0; i < arr.length; i++) {
    // Only replace the first instance of a match.
    arr[i] = arr[i].replace(/(\s|^)(\w)/, (chr) => chr.toLocaleLowerCase());
  }

  return arr.join(",");
}
