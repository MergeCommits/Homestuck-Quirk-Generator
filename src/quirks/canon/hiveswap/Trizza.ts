import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Trizza extends Quirk {
  public constructor() {
    super("Trizza Tethis", hiveswapTag, "#6E003C");
  }

  protected quirkify(): void {
    this.replaceString("[Ww]", "ψ");
  }
}
