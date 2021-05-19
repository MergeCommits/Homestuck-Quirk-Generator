import Quirk from "quirks/Quirk";

export default class Folykl extends Quirk {
    public constructor() {
        super("Folykl Darane");
    }

    protected quirkify(): void {
        this.lowerCase();
        const reg = new RegExp("\\s", "g");
        this.quirkText = this.quirkText.replace(reg, function(match) {
            if (Math.random() <= 0.1) {
                const MIN_LENGTH = 1;
                const MAX_LENGTH = 5;
                const length = Math.random() * (MAX_LENGTH + 1 - MIN_LENGTH) + MIN_LENGTH;

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