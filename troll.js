// Program Function; Converting written text to troll quirks.
// Author; CommanderMark
// Creation Date; December 23rd, 2016
// Date Last Modified; December 28th, 2016

document.addEventListener('DOMContentLoaded', function() {
    // Apply the autosize function to all textarea elements.
    document.querySelector('textarea').addEventListener('keydown', function() {
        var textareaArray = document.getElementsByClassName('textOutput');

        for (var i = 0; i < textareaArray.length; i++) {
            autosize(textareaArray[i]);
        }
        autosize(document.querySelector('textarea'));
    });

    checkElementID("all").addEventListener("click", function() {
        checkElementID("aradiaID").checked = true;
        checkElementID("tavrosID").checked = true;
        checkElementID("solluxID").checked = true;
        checkElementID("karkatID").checked = true;
        checkElementID("nepetaID").checked = true;
        checkElementID("kanayaID").checked = true;
        checkElementID("tereziID").checked = true;
        checkElementID("vriskaID").checked = true;
        checkElementID("equiusID").checked = true;
        checkElementID("gamzeeID").checked = true;
        checkElementID("eridanID").checked = true;
        checkElementID("feferiID").checked = true;

        checkElementID("rufiohID").checked = true;
        checkElementID("mitunaID").checked = true;
        checkElementID("kankriID").checked = true;
        checkElementID("meulinID").checked = true;
        checkElementID("porrimID").checked = true;
        checkElementID("latulaID").checked = true;
        checkElementID("araneaID").checked = true;
        checkElementID("horussID").checked = true;
        checkElementID("kurlozID").checked = true;
        checkElementID("cronusID").checked = true;
        checkElementID("meenahID").checked = true;
        save();
    });

    checkElementID("alternia").addEventListener("click", function() {
        alternateTrolls(true);
        checkElementID("alterniaTab").click();
        save();
    });

    checkElementID("beforus").addEventListener("click", function() {
        alternateTrolls(false);
        checkElementID("beforusTab").click();
        save();
    });

    // Have they accessed the page before?
    var previousTime = isBool(localStorage.getItem("previousTimeSave"));

    // Reload their previous options then.
    if (previousTime) {
        var checkboxes = document.getElementsByName('toggleBox');

        for(var i = 0; i < checkboxes.length; i++) {
            var saveName = "ID " + JSON.stringify(i);
            checkboxes[i].checked = isBool(localStorage.getItem(saveName));
        }
    } else {
        previousTime = true;
    }

    document.getElementById("alterniaTab").click();

    updateText();
});

// Save toggle boxes on page.
function save() {
    var checkboxes = document.getElementsByName('toggleBox');

    for(var i = 0; i < checkboxes.length; i++) {
        var saveName = "ID " + JSON.stringify(i);
        localStorage.setItem(saveName, checkboxes[i].checked);
    }

    updateText();
}

function updateText() {
    if (checkElementID("aradiaID").checked) {
        checkElementID("aradiaRow").style.display='';
        checkElementID("aradiaText").value = getAradia(checkElementID("textInput").value, checkElementID("ribbit").checked);
    } else {
        checkElementID("aradiaRow").style.display='none';
    }

    if (checkElementID("tavrosID").checked) {
        checkElementID("tavrosRow").style.display='';
        checkElementID("tavrosText").value = getTavros(checkElementID("textInput").value);
    } else {
        checkElementID("tavrosRow").style.display='none';
    }

    if (checkElementID("solluxID").checked) {
        checkElementID("solluxRow").style.display='';
        checkElementID("solluxText").value = getSollux(checkElementID("textInput").value, checkElementID("halfDead").checked);
    } else {
        checkElementID("solluxRow").style.display='none';
    }

    if (checkElementID("karkatID").checked) {
        checkElementID("karkatRow").style.display='';
        checkElementID("karkatText").value = getKarkat(checkElementID("textInput").value);
    } else {
        checkElementID("karkatRow").style.display='none';
    }

    if (checkElementID("nepetaID").checked) {
        checkElementID("nepetaRow").style.display='';
        checkElementID("nepetaText").value = getNepeta(checkElementID("textInput").value, checkElementID("catPuns").checked);
    } else {
        checkElementID("nepetaRow").style.display='none';
    }

    if (checkElementID("kanayaID").checked) {
        checkElementID("kanayaRow").style.display='';
        checkElementID("kanayaText").value = getKanaya(checkElementID("textInput").value);
    } else {
        checkElementID("kanayaRow").style.display='none';
    }

    if (checkElementID("tereziID").checked) {
        checkElementID("tereziRow").style.display='';
        checkElementID("tereziText").value = getTerezi(checkElementID("textInput").value);
    } else {
        checkElementID("tereziRow").style.display='none';
    }

    if (checkElementID("vriskaID").checked) {
        checkElementID("vriskaRow").style.display='';
        checkElementID("vriskaText").value = getVriska(checkElementID("textInput").value, checkElementID("syllablesTo8").checked, checkElementID("vowelsTo8").checked);
    } else {
        checkElementID("vriskaRow").style.display='none';
    }

    if (checkElementID("equiusID").checked) {
        checkElementID("equiusRow").style.display='';
        checkElementID("equiusText").value = getEquius(checkElementID("textInput").value);
    } else {
        checkElementID("equiusRow").style.display='none';
    }

    if (checkElementID("gamzeeID").checked) {
        checkElementID("gamzeeRow").style.display='';
        checkElementID("gamzeeText").value = getGamzee(checkElementID("textInput").value);
    } else {
        checkElementID("gamzeeRow").style.display='none';
    }

    if (checkElementID("eridanID").checked) {
        checkElementID("eridanRow").style.display='';
        checkElementID("eridanText").value = getEridan(checkElementID("textInput").value, checkElementID("eridanPunc").checked);
    } else {
        checkElementID("eridanRow").style.display='none';
    }

    if (checkElementID("feferiID").checked) {
        checkElementID("feferiRow").style.display='';
        checkElementID("feferiText").value = getFeferi(checkElementID("textInput").value, checkElementID("fishPunsFef").checked);
    } else {
        checkElementID("feferiRow").style.display='none';
    }

    
    
    if (checkElementID("rufiohID").checked) {
        checkElementID("rufiohRow").style.display='';
        checkElementID("rufiohText").value = getRufioh(checkElementID("textInput").value, checkElementID("rufiohCensor").checked);
    } else {
        checkElementID("rufiohRow").style.display='none';
    }

    if (checkElementID("mitunaID").checked) {
        checkElementID("mitunaRow").style.display='';
        checkElementID("mitunaText").value = getMituna(checkElementID("textInput").value, checkElementID("mitunaLetters").checked);
    } else {
        checkElementID("mitunaRow").style.display='none';
    }

    if (checkElementID("kankriID").checked) {
        checkElementID("kankriRow").style.display='';
        checkElementID("kankriText").value = getKankri(checkElementID("textInput").value);
    } else {
        checkElementID("kankriRow").style.display='none';
    }

    if (checkElementID("meulinID").checked) {
        checkElementID("meulinRow").style.display='';
        checkElementID("meulinText").value = getMeulin(checkElementID("textInput").value);
    } else {
        checkElementID("meulinRow").style.display='none';
    }

    if (checkElementID("porrimID").checked) {
        checkElementID("porrimRow").style.display='';
        checkElementID("porrimText").value = getPorrim(checkElementID("textInput").value);
    } else {
        checkElementID("porrimRow").style.display='none';
    }

    if (checkElementID("latulaID").checked) {
        checkElementID("latulaRow").style.display='';
        checkElementID("latulaText").value = getLatula(checkElementID("textInput").value);
    } else {
        checkElementID("latulaRow").style.display='none';
    }

    if (checkElementID("araneaID").checked) {
        checkElementID("araneaRow").style.display='';
        checkElementID("araneaText").value = getAranea(checkElementID("textInput").value, checkElementID("araneaPunc").checked);
    } else {
        checkElementID("araneaRow").style.display='none';
    }

    if (checkElementID("horussID").checked) {
        checkElementID("horussRow").style.display='';
        checkElementID("horussText").value = getHoruss(checkElementID("textInput").value, checkElementID("horussCensor").checked);
    } else {
        checkElementID("horussRow").style.display='none';
    }

    if (checkElementID("kurlozID").checked) {
        checkElementID("kurlozRow").style.display='';
        checkElementID("kurlozText").value = getKurloz(checkElementID("textInput").value);
    } else {
        checkElementID("kurlozRow").style.display='none';
    }

    if (checkElementID("cronusID").checked) {
        checkElementID("cronusRow").style.display='';
        checkElementID("cronusText").value = getCronus(checkElementID("textInput").value);
    } else {
        checkElementID("cronusRow").style.display='none';
    }

    if (checkElementID("meenahID").checked) {
        checkElementID("meenahRow").style.display='';
        checkElementID("meenahText").value = getMeenah(checkElementID("textInput").value, checkElementID("fishPunsMen").checked);
    } else {
        checkElementID("meenahRow").style.display='none';
    }
}

function alternateTrolls(bool) {
    checkElementID("aradiaID").checked = bool;
    checkElementID("tavrosID").checked = bool;
    checkElementID("solluxID").checked = bool;
    checkElementID("karkatID").checked = bool;
    checkElementID("nepetaID").checked = bool;
    checkElementID("kanayaID").checked = bool;
    checkElementID("tereziID").checked = bool;
    checkElementID("vriskaID").checked = bool;
    checkElementID("equiusID").checked = bool;
    checkElementID("gamzeeID").checked = bool;
    checkElementID("eridanID").checked = bool;
    checkElementID("feferiID").checked = bool;

    checkElementID("rufiohID").checked = !bool;
    checkElementID("mitunaID").checked = !bool;
    checkElementID("kankriID").checked = !bool;
    checkElementID("meulinID").checked = !bool;
    checkElementID("porrimID").checked = !bool;
    checkElementID("latulaID").checked = !bool;
    checkElementID("araneaID").checked = !bool;
    checkElementID("horussID").checked = !bool;
    checkElementID("kurlozID").checked = !bool;
    checkElementID("cronusID").checked = !bool;
    checkElementID("meenahID").checked = !bool;
}

// ***ALTERNIA TROLLS***
// ARADIA: LOWERCASE; TOGGLE DEAD o --> 0 AND RIBBIT; // √
// TAVROS: INVERTED CASE; . --> ,; ADD } TO EMOTICONS; // √
// SOLLUX: LOWERCASE; s --> 2; // √
    // i --> ii;
    // to + too --> two;
// KARKAT: CAPITALS; // √
// NEPETA: LOWERCASE; ADD :33 < TO START; ee --> 33; TOGGLE CAT PUNS // √
// KANAYA: LOWERCASE; CAPITALIZE AFTER " "; // √
// TEREZI: CAPITALS; a --> 4; // √
    // i --> 1; e --> 3; :)/:( --> >:}/>:{;
    // REMOVE , ! and ?;
// VRISKA: PROPER GRAMMAR; b --> 8; // √
    // TOGGLE "ate" --> 8 + great --> gr8; TOGGLE VOWEL --> 8;
// EQUIUS: PROPER GRAMMAR; Start with "D -->"; strong --> STRONG; // √
    // x --> %; nay --> neigh; loo --> 100; ool --> 001; cross --> %;
// GAMZEE: ALTERNATING CAPS, IGNORE PUNCTUATION; // √
// ERIDAN: LOWER CASE; w --> ww; v --> vv; ing --> in; // √
    // want to --> wanna; going to --> gonna;
    // TOGGLE if --> a + and --> an RANDOMLY;
// FEFERI: LEAVE AS-IS; H --> )(; E --> -E; :) --> 38D; // √

function getAradia(text, dead) {
    // If it's empty don't waste your time.
    if (text == "") { return ""; }
    if (!dead) { return text.toLowerCase(); }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        
        if (quirk[i] == "o") {
            quirk[i] = "0";
        }

        if (dead && typeof quirk[i + 1] == 'undefined' && Math.floor(Math.random() * 100) == 41) {
            quirk[i] = quirk[i] + " ribbit";
        }
    }

    return arrayToString(quirk);
}

function getTavros(text) {
    if (text == "") { return ""; }

    var quirk = text.toUpperCase().split("");
    quirk[0] = quirk[0].toLowerCase();

    for (var i = 0; i < quirk.length; i++) {

        if (quirk[i] == ".") {
            quirk[i] = ",";
        }

        if (quirk[i] == "," && quirk[i + 1] == " " && typeof quirk[i + 2] != 'undefined') {
            quirk[i + 2] = quirk[i + 2].toLowerCase();
        }
    }

    var quirkStr = arrayToString(quirk);
    quirkStr = quirkStr.replace(":)", "}:)");
    quirkStr = quirkStr.replace(":(", "}:(");

    return quirkStr;
}

function getSollux(text, dead) {
    if (text == "") { return ""; }

    if (!dead) {
        var quirk = text.toLowerCase().split("");

        for (var i = 0; i < quirk.length; i++) {

            // Make sure there's no 'i's in front or back.
            if (quirk[i] == "i" && quirk[i - 1] != "i" && quirk[i + 1] != "i") {
                quirk[i] = "ii"
            }

            if (quirk[i] == "s") {
                quirk[i] = "2";
            }
        }

        var quirkStr = arrayToString(quirk);
        quirkStr = quirkStr.replace(/\btoo\b/g, "two");
        quirkStr = quirkStr.replace(/\bto\b/g, "two");

        return quirkStr;
    } else {
        return getAradia(text, true);
    }
}

function getKarkat(text) {
    return text.toUpperCase();
}

function getNepeta(text, catpuns) {
    if (text == "") { return ""; }

    var quirkStr = text.toLowerCase();

    quirkStr.replace("ee", "33");

    // WOW CRINGE
    if (catpuns) {
        quirkStr = quirkStr.replace(/\bmotherfucker\b/g, "meowtherfucker");
        quirkStr = quirkStr.replace(/for/g, "fur");
        quirkStr = quirkStr.replace("pause", "paws");
        quirkStr = quirkStr.replace("cause", "claws");
        quirkStr = quirkStr.replace("now", "meow");
        quirkStr = quirkStr.replace(/\bperfect\b/g, "purfect");
        quirkStr = quirkStr.replace("per", "pur");
        quirkStr = quirkStr.replace("pre", "pur");
    }

    return ":33 < " + quirkStr;
}

function getKanaya(text) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");
    quirk[0] = quirk[0].toUpperCase();

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == " " && typeof quirk[i + 1] != 'undefined') {
            quirk[i + 1] = quirk[i + 1].toUpperCase();
        }
    }

    return arrayToString(quirk);
}

function getTerezi(text) {
    if (text == "") { return ""; }

    var quirk = text.toUpperCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "A") {
            quirk[i] = "4";
        }

        if (quirk[i] == "I") {
            quirk[i] = "1";
        }

        if (quirk[i] == "E") {
            quirk[i] = "3";
        }

        if (quirk[i] == "," || quirk[i] == "!" || quirk[i] == "?") {
            quirk[i] = "";
        }
    }

    var quirkStr = arrayToString(quirk);
    quirkStr = quirkStr.replace(":)", ">:}");
    quirkStr = quirkStr.replace(":(", ">:{");

    return quirkStr;
}

function getVriska(text, words, vowels) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "b") {
            quirk[i] = "8";
        }

        if (vowels && Math.random() < 0.4) {
            if (quirk[i] == "a" || quirk[i] == "e" || quirk[i] == "i" || quirk[i] == "o" || quirk[i] == "u") {
                quirk[i] = "8";
            }
        }
    }
    quirk = quirk.toProperCase();

    var quirkStr = arrayToString(quirk);

    if (words) {
        quirkStr = quirkStr.replace("ate", "8");
        quirkStr = quirkStr.replaceMatchCase(/\bgreat\b/, "gr8");
    }

    return quirkStr;
}

function getEquius(text) {
    if (text == "") { return ""; }
    
    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "x") {
            quirk[i] = "%";
        }
    }
    quirk = quirk.toProperCase();

    var quirkStr = arrayToString(quirk);

    quirkStr = quirkStr.replaceMatchCase("nay", "neigh");
    quirkStr = quirkStr.replace(/loo/ig, "100");
    quirkStr = quirkStr.replace(/ool/ig, "001");
    quirkStr = quirkStr.replace(/strong/ig, "STRONG");

    return "D --> " + quirkStr;
}

function getGamzee(text) {
    if (text == "") { return ""; }
    
    var quirk = text.toLowerCase().split("");
    var caps = false;

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i].match(/[a-z]/i)) {
            caps = !caps;
        }

        if (caps) {
            quirk[i] = quirk[i].toUpperCase();
        }
    }

    return arrayToString(quirk);
}

function getEridan(text, punctuation) {
    if (text == "") { return ""; }
    
    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        // Make sure there's no 'w's in front or back.
        if (quirk[i] == "w" && quirk[i - 1] != "w" && quirk[i + 1] != "w") {
            quirk[i] = "ww"
        }

        if (quirk[i] == "v" && quirk[i - 1] != "v" && quirk[i + 1] != "v") {
            quirk[i] = "vv"
        }
    }

    var quirkStr = arrayToString(quirk);

    if (punctuation) {
        quirkStr.replace("ing ", "in ");
        quirkStr = quirkStr.replace(/\bwwant to\b/g, "wwanna");
        quirkStr = quirkStr.replace(/\bgoing to\b/g, "gonna");

        quirkStr = quirkStr.replace(/\bif\b/g, "a");
        quirkStr = quirkStr.replace(/\band\b/g, "an");
    }

    return quirkStr;
}

function getFeferi(text, fishpuns) {
    if (text == "") { return ""; }
    
    var quirk = text;
    quirk.replace(":)", "38D");

    if (fishpuns) {
        quirk = quirk.toFishPuns();

        // while (true) {
        //     quirk.replace("YOU'RE A KID", "YOU'RE A SQUID");
        //     quirk.replace("YOU'RE A SQUID", "YOU'RE A KID");
        // }
    }
    quirk = quirk.split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "H" || quirk[i] == "h") {
            quirk[i] = ")(";
        }

        if (quirk[i] == "E") {
            quirk[i] = "-E";
        }
    }

    return arrayToString(quirk);
}

// ***BEFORUS TROLLS***
// RUFIOH: LOWERCASE; i --> 1; TOGGLE CENSOR SWEARS; // √
// MITUNA: CAPITALIZE; A --> 4; B --> 8; E --> 3 // √
    // I --> 1; O --> 0; S --> 5; T -->7;
    // TOGGLE H AFTER 7/5 --> 7H;
// KANKRI: PROPER GRAMMAR; b --> 6; o --> 9; // √
// MEULIN: CAPITALIZE; EE --> 33; TOGGLE CAT PUNS; // √
// PORRIM: PROPER GRAMMAR; o/0 --> o+; plus --> +; // √
// LATULA: LOWERCASE; a --> 4; i --> 1; e --> 3; // √
// ARANEA: PROPER GRAMMAR; b --> 8; // √
    // TOGGLE PUNCTUATION REPLACEMENT --> 8;
// HORUSS: PROPER GRAMMAR: STARTS WITH '8=D <' // √
    // x/ks --> %; TOGGLE OVERLY CENSOR;
// KURLOZ: CAPITALIZE; // √
// CRONUS: LOWERCASE; w --> vw/wv; v--> w; //√
    // COMPLICATED B --> 8;
// MEENAH: COMPLICATED CAPITAL;  H --> )(; // √
    // E --> -E; TOGGLE OVERLY FISH PUNS;
    // :)/:( --> 38)/38(;

function getRufioh(text, censor) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "i") {
            quirk[i] = "1";
        }
    }

    var quirkStr = arrayToString(quirk);

    quirkStr = quirkStr.replace(/\bgirls\b/g, "dolls");
    quirkStr = quirkStr.replace(/\bgirl\b/g, "doll");

    if (censor) {
        quirkStr = quirkStr.replace("fuck", "f*ck");
        quirkStr = quirkStr.replace("n1gger", "n*gger");
        quirkStr = quirkStr.replace("sh1t", "sh*t");
        quirkStr = quirkStr.replace("damn", "d*mn");
        quirkStr = quirkStr.replace("crap", "cr*p");
    }

    return quirkStr;
}

function getMituna(text, letters) {
    if (text == "") { return ""; }

    var quirk = text.toUpperCase().split("");
    for (var i = 0; i < quirk.length; i++) {
        if (letters && (Math.random() * 28) < 10) {
            if (quirk[i] == "S" || quirk[i] == "7") {
                quirk[i] = "7H";
            }
        }

        if (quirk[i] == "A") {
            quirk[i] = "4";
        }

        if (quirk[i] == "B") {
            quirk[i] = "8";
        }

        if (quirk[i] == "E") {
            quirk[i] = "3";
        }

        if (quirk[i] == "I") {
            quirk[i] = "1";
        }

        if (quirk[i] == "O") {
            quirk[i] = "0";
        }

        if (quirk[i] == "S") {
            quirk[i] = "5";
        }

        if (quirk[i] == "T") {
            quirk[i] = "7";
        }
    }

    return arrayToString(quirk);
}

function getKankri(text) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");
    quirk[0] = quirk[0].toLowerCase();

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "b") {
            quirk[i] = "6";
        }

        if (quirk[i] == "o") {
            quirk[i] = "9";
        }
    }

    quirk = quirk.toProperCase();

    return arrayToString(quirk);
}

function getMeulin(text) {
    if (text == "") { return ""; }

    var quirkStr = text.toUpperCase();

    quirkStr.replace("EE", "33");

    quirkStr = quirkStr.replace(/\bMOTHERFUCKER\b/g, "meowtherfucker");
    quirkStr = quirkStr.replace("FOR", "FUR");
    quirkStr = quirkStr.replace("PAUSE", "PAWS");
    quirkStr = quirkStr.replace("CAUSE", "CLAWS");
    quirkStr = quirkStr.replace("NOW", "MEOW");
    quirkStr = quirkStr.replace(/\bPERFECT\b/g, "PURFECT");
    quirkStr = quirkStr.replace("PER", "PUR");
    quirkStr = quirkStr.replace("PRE", "PUR");
    quirkStr = quirkStr.replace("OMG", "MOG");

    return quirkStr;
}

function getPorrim(text) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");
    quirk[0] = quirk[0].toLowerCase();

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "o") {
            quirk[i] = "o+";
        } else if (quirk[i] == "0") {
            quirk[i] = "0+";
        }
    }

    var quirkStr = arrayToString(quirk.toProperCase());

    quirkStr = quirkStr.replace(/\bplus\b/ig, "+");

    return quirkStr;
}

function getLatula(text) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "a") {
            quirk[i] = "4";
        }

        if (quirk[i] == "i") {
            quirk[i] = "1";
        }

        if (quirk[i] == "e") {
            quirk[i] = "3";
        }
    }

    return arrayToString(quirk);
}

function getAranea(text, punctuation) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "b") {
            quirk[i] = "8";
        }

        if (punctuation && Math.random() < 0.4) {
            if (quirk[i] == "a" || quirk[i] == "e" || quirk[i] == "i" || quirk[i] == "o" || quirk[i] == "u") {
                quirk[i] = "8";
            }
        }
    }

    var quirkStr = arrayToString(quirk.toProperCase());

    if (punctuation) {
        quirkStr = quirkStr.replace(/\bgreat\b/ig, "gr8");
    }

    return quirkStr;
}

function getHoruss(text, censor) {
    if (text == "") { return ""; }

    var quirk = text.toLowerCase().split("");

    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "x" || (quirk[i] == "k" && quirk[i + 1] == "s")) {
            quirk[i] = "%";
            quirk[i + 1] = "";
        }
    }

    var quirkStr = arrayToString(quirk.toProperCase());
    if (censor) {
        quirkStr = quirkStr.replace("fuck", "f*ck");
        quirkStr = quirkStr.replace("nigger", "n*gger");
        quirkStr = quirkStr.replace("shit", "sh*t");
        quirkStr = quirkStr.replace("damn", "d*mn");
        quirkStr = quirkStr.replace("crap", "cr*p");
        quirkStr = quirkStr.replace("whoops", "wh**ps");
        quirkStr = quirkStr.replace("silly", "s*lly");
        quirkStr = quirkStr.replace("shoot", "sh**t");
        quirkStr = quirkStr.replace("fidging", "f*dging");
    }

    return "8=D < " + quirkStr;
}

function getKurloz(text) {
    return text.toUpperCase();
}

function getCronus(text) {
    if (text == "") { return ""; }

    // Check if a word is capitalized, lowercase the rest.
    var matches = text.match(/\b([A-Z]{2,})\b/g);
    if (matches == null) { matches = ""; }
    var quirk = text.toLowerCase();
    var regex;

    for (var i = 0; i < matches.length; i++) {
        regex = new RegExp("/\b" + matches[i] + "\b/ig");
        quirk = quirk.replace(regex, matches[i]);
    }

    quirk = text.split("");
    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "w" && quirk[i - 1] != "v" && quirk[i + 1] != "v") {
            if (Math.floor(Math.random() * 2) == 1) {
                quirk[i] = "vw"
            } else {
                quirk[i] = "wv"
            }
        } else if (quirk[i] == "B") {
            quirk[i] = "8";
        }
    }

    // This is lazy.
    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "v" && quirk[i - 1] != "w" && quirk[i + 1] != "w") {
            quirk[i] = "w"
        }
    }

    return arrayToString(quirk);
}

function getMeenah(text, fishpuns) {
    if (text == "") { return ""; }

    // Check if a word is capitalized, lowercase the rest.
    var matches = text.match(/\b([A-Z]{2,})\b/g);
    if (matches == null) { matches = ""; }
    var quirk = text.toLowerCase();
    var regex;

    for (var i = 0; i < matches.length; i++) {
        regex = new RegExp("/\b" + matches[i] + "\b/ig");
        quirk = quirk.replace(regex, matches[i]);
    }

    quirk = text.split("");
    for (var i = 0; i < quirk.length; i++) {
        if (quirk[i] == "H") {
            quirk[i] = ")(";
        } else if (quirk[i] == "E") {
            quirk[i] = "-E";
        }
    }

    var quirkStr = arrayToString(quirk);
    quirkStr = quirkStr.replace(":)", "38)");
    quirkStr = quirkStr.replace(":(", "38(");

    if (fishpuns) {
        quirkStr = quirkStr.toFishPuns();
        quirkStr = quirkStr.replace(/what are/ig, "water");
    }

    return quirkStr;
}

// Cast array of letters to proper grammar.
Array.prototype.toProperCase = function() {
    var ar = this;

    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == "." && typeof ar[i + 2] != 'undefined' && ar[i + 1] == " ") {
            ar[i + 2] = ar[i + 2].toUpperCase();
            i += 2;
        }
    }
    return ar;
}

// Replace and match case.
// If the replacements are different sizes then lowercase it.
String.prototype.replaceMatchCase = function(subStr, newStr) {
    var str = this.split(" ");
    for (var i = 0; i < str.length; i++) {
        // Found a match, start comparing char values.
        if (str[i].toLowerCase() == subStr.toLowerCase()) {
            for (var h = 0; h < str[i].length; h++) {
                if (str[i].charAt(h) == str[i].charAt(h).toUpperCase()) {
                    str[i] = str[i].replaceAt(h, newStr.charAt(h).toUpperCase());
                } else {
                    str[i] = str[i].replaceAt(h, newStr.charAt(h).toLowerCase());
                }

                // Last char, make sure the entire new string was added.
                if (h == (str[i].length - 1) && str[i].length != newStr.length) {
                    if (str[i] == str[i].toUpperCase()) { // ALL CAPS
                        str[i] += newStr.substring(h, newStr.length - 1).toUpperCase();
                    } else { // lowercase
                        str[i] += newStr.substring(h, newStr.length - 1).toLowerCase();
                    }
                }
                // Last char for the new string, stop here then.
                else if (h == (newStr.length - 1)) {
                    str[i] = str[i].substr(0, newStr.length);
                }
            }
        }
        str[i] += " ";
    }
    return arrayToString(str);
}

// Replace char at desired index.
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

// AAAAAAAAAAAAAAAAAAAAAAAAA
String.prototype.toFishPuns = function() {
    var str = this;

    str = str.replaceMatchCase("kill", "krill");
    str = str.replaceMatchCase("well", "whale");
    str = str.replaceMatchCase("fine", "fin");
    str = str.replaceMatchCase("see", "sea");
    str = str.replaceMatchCase("should", "shoald");
    str = str.replaceMatchCase("kidding", "squidding");
    str = str.replaceMatchCase("sure", "shore")
    str = str.replaceMatchCase("surely", "shorely")
    str = str.replaceMatchCase("crap", "carp")
        
    return str;
}

// Opening tabs for the floatingBox.
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Dynamically increase the height of a textarea.
function autosize(el) {
    setTimeout(function() {
        el.style.cssText = 'height: auto; padding: 0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
}

// Cause getElementByID looks ugly.
function checkElementID(ID) {
    return document.getElementById(ID);
}

// Convert Array back to a String.
function arrayToString(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        result += text[i];
    }

    return result;
}

// Convert String to Boolean.
function isBool(str) {
    return (str == "true");
}