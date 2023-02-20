import { polypaColor } from "quirks/canon/hiveswap/Polypa";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Boldir extends Quirk {
  public constructor() {
    super("Boldir Lamati", hiveswapTag, polypaColor);
  }

  protected quirkify(): void {
    this.lowerCase();
    this.prefix("(");
    this.suffix(")");
  }
}
