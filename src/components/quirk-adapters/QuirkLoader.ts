import Category from "quirks/Category";
import Alternia from "quirks/collections/Alternia";
import Beforus from "quirks/collections/Beforus";
import Cherubs from "quirks/collections/Cherubs";
import Sprites from "quirks/collections/Sprites";
import Hiveswap from "quirks/collections/Hiveswap";

export default function getQuirkCategories(): Category[] {
    return [
        new Alternia(),
        new Beforus(),
        new Cherubs(),
        new Sprites(),
        new Hiveswap()
    ];
}