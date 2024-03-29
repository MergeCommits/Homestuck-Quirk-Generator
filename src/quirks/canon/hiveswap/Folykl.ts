import { ciravaColor } from "quirks/canon/hiveswap/Cirava";
import { hiveswapTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Folykl extends Quirk {
    public constructor() {
        super("Folykl Darane", hiveswapTag, ciravaColor);
    }

    protected override quirkify(): void {
        this.lowerCase();
        const reg = new RegExp("\\s", "g");
        this.quirkText = this.quirkText.replace(reg, (match) => {
            if (Math.random() <= 0.1) {
                const MIN_LENGTH = 1;
                const MAX_LENGTH = 5;
                const length =
                    Math.random() * (MAX_LENGTH + 1 - MIN_LENGTH) + MIN_LENGTH;

                let retVal = "";
                for (let i = 0; i < length; i++) {
                    retVal += " ";
                }
                return retVal;
            }

            return match;
        });
    }
}
