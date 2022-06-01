import Quirk from "quirks/Quirk";
import Modifier from "quirks/Modifier";


export default class Meulin extends Quirk {
    private puns: Modifier;

    public constructor() {
        super("Meulin Leijon");
        this.puns = this.addModifier("Cat Puns", "Self-expurrnatory!", true);
    }

    protected quirkify(): void {
        this.upperCase();
        if (mods.puns) { this.applyCatPuns(); }
        this.replaceString("EE", "33");
        this.replaceString("OMG", "MOG");
    }
}