import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Karkat extends Quirk {
  public constructor() {
    super("Karkat Vantas", alterniaTag, "#626262");
  }

  protected quirkify(): void {
    this.upperCase();
  }
}
