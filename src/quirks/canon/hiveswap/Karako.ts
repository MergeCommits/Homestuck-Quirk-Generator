import { chahutColor } from "quirks/canon/hiveswap/Chahut";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Karako extends Quirk {
  public constructor() {
    super("Karako Pierot", hiveswapTag, chahutColor);
  }

  protected quirkify(): void {
    this.replaceMatchCase("\\w+", "honk");
  }
}
