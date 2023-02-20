import { beforusTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Kankri extends Quirk {
  public constructor() {
    super("Kankri Vantas", beforusTag, "#FF0000");
  }

  protected quirkify(): void {
    this.replaceString("[Bb]", "6");
    this.replaceString("[Oo]", "9");
  }
}
