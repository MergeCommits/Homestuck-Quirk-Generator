import { alterniaTag } from "quirks/canon/Tags";
import Quirk from "quirks/Quirk";

export default class Nepeta extends Quirk {
    public constructor(name = "Nepeta Leijon", tag = alterniaTag) {
        const punsMod = {
            id: "puns",
            title: "Cat Puns",
            description: "Self-expurrnatory!",
            defaultValue: true,
        };

        super(name, tag, "#416600", [punsMod]);
    }

    protected override quirkify(mods: { puns: boolean }): void {
        this.lowerCase();
        if (mods.puns) {
            this.applyCatPuns();
        }
        this.replaceString("e{2,}", (matched) => "3".repeat(matched.length));
        this.prefix(":33 < ");
    }

    protected applyCatPuns(): void {
        this.replaceWordMatchCase("afraid", "afuraid");
        this.replaceWordMatchCase("ampora", "ampurra");
        this.replaceWordMatchCase("amusement", "amewsment");
        this.replaceWordMatchCase("approaches", "appurroaches");
        this.replaceWordMatchCase("approve", "appurrve");
        this.replaceWordMatchCase("awful", "pawful");
        this.replaceWordMatchCase("because", "beclaws");
        this.replaceWordMatchCase("cheater", "cheetah");
        this.replaceWordMatchCase("complicated", "complickated");
        this.replaceWordMatchCase("confident", "confurdent");
        this.replaceWordMatchCase(
            "councillor|counsellor|councilor|counselor",
            "pouncellor"
        );
        this.replaceWordMatchCase("farewell", "furwell");
        this.replaceWordMatchCase("frustrating", "furstrating");
        this.replaceWordMatchCase("furious", "furrious");
        this.replaceWordMatchCase("ferocious", "furrocious");
        this.replaceWordMatchCase("hypocrite", "hypurrcrite");
        this.replaceWordMatchCase("impolite", "impurrlite");
        this.replaceWordMatchCase("important", "impurrtant");
        this.replaceWordMatchCase("information", "infurmation");
        this.replaceWordMatchCase("karkat", "karcat");
        this.replaceWordMatchCase("kidding", "kitten");
        this.replaceWordMatchCase("me", "t = meowt");
        this.replaceWordMatchCase("decapitate", "decapurrtate");
        this.replaceWordMatchCase("departed", "depurrted");
        this.replaceWordMatchCase("different", "diffurent");
        this.replaceWordMatchCase("metaphorical", "metafurkitty");
        this.replaceWordMatchCase("muscular", "meowscular");
        this.replaceWordMatchCase("nap", "catnap");
        this.replaceWordMatchCase("opportunity", "opurrtunity");
        this.replaceWordMatchCase("particular", "purrticular");
        this.replaceWordMatchCase("pause", "paws");
        this.replaceWordMatchCase("pearl", "purrl");
        this.replaceWordMatchCase("protection", "purrtection");
        this.replaceWordMatchCase("politics", "pawlitics");
        this.replaceWordMatchCase("ponder", "pawnder");
        this.replaceWordMatchCase("position", "purrsition");
        this.replaceWordMatchCase("positive", "pawsitive");
        this.replaceWordMatchCase("possible", "pawsible");
        this.replaceWordMatchCase("posthaste", "scratching-posthaste");
        this.replaceWordMatchCase("powers", "pawers");
        this.replaceWordMatchCase("procrastinating", "purrcastinating");
        this.replaceWordMatchCase("pronounce", "purrnounce");
        this.replaceWordMatchCase("provoke", "purrvoke");
        this.replaceWordMatchCase("pursed", "purrsed");
        this.replaceWordMatchCase("reference", "refurence");
        this.replaceWordMatchCase("referring", "refurring");
        this.replaceWordMatchCase("risk", "frisk");
        this.replaceWordMatchCase("scamper", "scampurr");
        this.replaceWordMatchCase("talking", "stalking");
        this.replaceWordMatchCase("telepathy", "telepurrthy");
        this.replaceWordMatchCase("transfer", "transfur");
        this.replaceWordMatchCase("transparent", "transpurrent");
        this.replaceWordMatchCase("unfortunately", "unfurtunately");
        this.replaceWordMatchCase("unresponsive", "unrespawsive");
        this.replaceWordMatchCase("vriska", "friska");
        this.replaceWordMatchCase("whimper", "whimpurr");
        this.replaceWordMatchCase("whisper", "whisker");

        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("far|for", "fur");
        this.replaceMatchCase("per|pre|par", "purr");
    }
}
