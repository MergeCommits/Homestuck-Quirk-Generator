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
        this.replaceString("ee", "33");
        this.prefix(":33 < ");
    }

    protected applyCatPuns(): void {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("afraid", "afuraid");
        this.replaceMatchCase("ampora", "ampurra");
        this.replaceMatchCase("amusement", "amewsment");
        this.replaceMatchCase("approaches", "appurroaches");
        this.replaceMatchCase("approve", "appurrve");
        this.replaceMatchCase("awful", "pawful");
        this.replaceMatchCase("because", "beclaws");
        this.replaceMatchCase("cheater", "cheetah");
        this.replaceMatchCase("complicated", "complickated");
        this.replaceMatchCase("confident", "confurdent");
        this.replaceMatchCase(
            "councillor|counsellor|councilor|counselor",
            "pouncellor"
        );
        this.replaceMatchCase("decapitate", "decapurrtate");
        this.replaceMatchCase("departed", "depurrted");
        this.replaceMatchCase("different", "diffurent");
        this.replaceMatchCase("far|for", "fur");
        this.replaceMatchCase("farewell", "furwell");
        this.replaceMatchCase("forbid", "furbid");
        this.replaceMatchCase("forget", "furget");
        this.replaceMatchCase("forgive", "furgive");
        this.replaceMatchCase("fortify", "furtify");
        this.replaceMatchCase("forward", "furward");
        this.replaceMatchCase("frustrating", "furstrating");
        this.replaceMatchCase("furious", "furrious");
        this.replaceMatchCase("ferocious", "furrocious");
        this.replaceMatchCase("hypocrite", "hypurrcrite");
        this.replaceMatchCase("impolite", "impurrlite");
        this.replaceMatchCase("important", "impurrtant");
        this.replaceMatchCase("information", "infurmation");
        this.replaceMatchCase("karkat", "karcat");
        this.replaceMatchCase("kidding", "kitten");
        this.replaceMatchCase("me", "t = meowt");
        this.replaceMatchCase("metaphorical", "metafurkitty");
        this.replaceMatchCase("muscular", "meowscular");
        this.replaceMatchCase("nap", "catnap");
        this.replaceMatchCase("opportunity", "opurrtunity");
        this.replaceMatchCase("particular", "purrticular");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("pearl", "purrl");
        this.replaceMatchCase("per", "purr");
        this.replaceMatchCase("percent", "purrcent");
        this.replaceMatchCase("perchance", "purrchance");
        this.replaceMatchCase("perfect", "purrfect");
        this.replaceMatchCase("perhaps", "purrhaps");
        this.replaceMatchCase("perk", "purrk");
        this.replaceMatchCase("permission", "purrmission");
        this.replaceMatchCase("perplex", "purrplex");
        this.replaceMatchCase("preposterous", "purrpawsterous");
        this.replaceMatchCase("persevere", "purrsevere");
        this.replaceMatchCase("persnickety", "purrsnickety");
        this.replaceMatchCase("person", "purrson");
        this.replaceMatchCase("personality", "purrsonality");
        this.replaceMatchCase("protection", "purrtection");
        this.replaceMatchCase("pretend", "purrtend");
        this.replaceMatchCase("perturb", "purrturb");
        this.replaceMatchCase("pervert", "purrvert");
        this.replaceMatchCase("politics", "pawlitics");
        this.replaceMatchCase("ponder", "pawnder");
        this.replaceMatchCase("position", "purrsition");
        this.replaceMatchCase("positive", "pawsitive");
        this.replaceMatchCase("possible", "pawsible");
        this.replaceMatchCase("posthaste", "scratching-posthaste");
        this.replaceMatchCase("powers", "pawers");
        this.replaceMatchCase("precious", "purrcious");
        this.replaceMatchCase("prefer", "purrfur");
        this.replaceMatchCase("preform", "purrform");
        this.replaceMatchCase("prepared", "prepurred");
        this.replaceMatchCase("pretty", "purrty");
        this.replaceMatchCase("procrastinating", "purrcastinating");
        this.replaceMatchCase("pronounce", "purrnounce");
        this.replaceMatchCase("provoke", "purrvoke");
        this.replaceMatchCase("pursed", "purrsed");
        this.replaceMatchCase("reference", "refurence");
        this.replaceMatchCase("referring", "refurring");
        this.replaceMatchCase("risk", "frisk");
        this.replaceMatchCase("scamper", "scampurr");
        this.replaceMatchCase("talking", "stalking");
        this.replaceMatchCase("telepathy", "telepurrthy");
        this.replaceMatchCase("transfer", "transfur");
        this.replaceMatchCase("transparent", "transpurrent");
        this.replaceMatchCase("unfortunately", "unfurtunately");
        this.replaceMatchCase("unresponsive", "unrespawsive");
        this.replaceMatchCase("vriska", "friska");
        this.replaceMatchCase("whimper", "whimpurr");
        this.replaceMatchCase("whisper", "whisker");
    }
}
