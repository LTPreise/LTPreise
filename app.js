function berechnen() {

    let beladen = Number(document.getElementById("beladen").value) || 0;
    let extra = Number(document.getElementById("extra").value) || 0;
    let maut = Number(document.getElementById("maut").value) || 0;
    let stopps = Number(document.getElementById("stopps").value) || 1;

    // Rückfahrt leer?
    let rueckfahrt = document.getElementById("rueckfahrt").checked;

    // Kilometerpreis automatisch wählen
    let kmPreis = 0;

    if (beladen <= 50) {
        kmPreis = 1.90;
    } else if (beladen <= 100) {
        kmPreis = 1.75;
    } else if (beladen <= 200) {
        kmPreis = 1.60;
    } else if (beladen <= 300) {
        kmPreis = 1.50;
    } else if (beladen <= 450) {
        kmPreis = 1.40;
    } else {
        kmPreis = 1.35;
    }

    // Leerkilometer mit 50 %
    let kalkulationsKm = beladen + extra;

    if (rueckfahrt) {
        kalkulationsKm += beladen * 0.25;
    }

    let preis = kalkulationsKm * kmPreis;

    // Zusätzliche Abladestellen
    if (stopps > 1) {
        preis += (stopps - 1) * 20;
    }

    // Maut
    preis += maut;

    // Mindestpreis
    if (preis < 75) {
        preis = 75;
    }

    document.getElementById("gesamtKm").innerHTML =
        kalkulationsKm.toFixed(0) + " km";

  document.getElementById("preis").innerHTML =
    preis.toFixed(2).replace(".", ",") + " € netto";

// Effektiver Preis pro tatsächlich gefahrenem Kilometer
let tatsaechlicheKm = beladen + extra;

if (rueckfahrt) {
    tatsaechlicheKm += beladen;
}

let effektiv = preis / tatsaechlicheKm;

// Tatsächlich gefahrene Kilometer
let tatsaechlicheKm = beladen + extra;

if (rueckfahrt) {
    tatsaechlicheKm += beladen;
}

let effektiv = preis / tatsaechlicheKm;

let ampel = "";

if (effektiv < 1.25) {
    ampel = "🔴 Schlechte Marge";
} else if (effektiv < 1.45) {
    ampel = "🟡 Ausreichende Marge";
} else {
    ampel = "🟢 Gute Marge";
}

document.getElementById("ampel").innerHTML = ampel;




    
