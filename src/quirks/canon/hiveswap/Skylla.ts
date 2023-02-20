import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const skyllaColor = "#A25200";

export default class Skylla extends Quirk {
  public constructor() {
    super("Skylla Koriga", hiveswapTag, skyllaColor);
  }

  protected quirkify(): void {
    this.replaceString("y", "yy");
    this.replaceString("Y", "YY");
  }
}
