import { equiusColor } from "quirks/canon/alternia/Equius";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export const amisiaColor = equiusColor;

export default class Amisia extends Quirk {
  public constructor() {
    super("Amisia Erdehn", hiveswapTag, amisiaColor);
  }

  protected quirkify(): void {
    this.lowerCase();
    this.replaceString("u", "uu");
  }
}
