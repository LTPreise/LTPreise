function berechnen() {

    // Eingaben
    let beladen = Number(document.getElementById("beladen").value) || 0;
    let leer = Number(document.getElementById("leer").value) || 0;
    let extra = Number(document.getElementById("extra").value) || 0;
    let maut = Number(document.getElementById("maut").value) || 0;
    let stopps = Number(document.getElementById("stopps").value) || 1;

    // Kilometerpreis
    let kmPreisFeld = document.getElementById("kmPreis");
    let kmPreis;

    if (kmPreisFeld.value.trim() !== "") {

        kmPreis = Number(kmPreisFeld.value);

    } else {

        if (beladen <= 50) {
            kmPreis = 1.90;
        }
        else if (beladen <= 100) {
            kmPreis = 1.75;
        }
        else if (beladen <= 200) {
            kmPreis = 1.60;
        }
        else if (beladen <= 300) {
            kmPreis = 1.50;
        }
        else if (beladen <= 450) {
            kmPreis = 1.40;
        }
        else {
            kmPreis = 1.35;
        }

    }

    // Kalkulationskilometer
    let kalkulationsKm = beladen + extra + (leer * 0.5);

    // Preis
    let preis = kalkulationsKm * kmPreis;

    // Abladestellen
    if (stopps > 1) {
        preis += (stopps - 1) * 20;
    }

    // Maut
    preis += maut;

    // Mindestpreis
    if (preis < 120) {
        preis = 120;
    }

    // Ausgabe
    document.getElementById("gesamtKm").innerHTML =
        kalkulationsKm.toFixed(0) + " km";

    document.getElementById("preis").innerHTML =
        preis.toFixed(2).replace(".", ",") + " € netto";

    // Effektiver Erlös
    let tatsaechlicheKm = beladen + leer + extra;

    let effektiv = 0;

    if (tatsaechlicheKm > 0) {
        effektiv = preis / tatsaechlicheKm;
    }

    document.getElementById("effektiv").innerHTML =
        effektiv.toFixed(2).replace(".", ",") + " €/km";

    // Preisampel
    let ampel = "";

    if (effektiv < 1.25) {
        ampel = "🔴 Preis prüfen";
    }
    else if (effektiv < 1.45) {
        ampel = "🟡 Wirtschaftlich";
    }
    else {
        ampel = "🟢 Sehr gute Marge";
    }

    document.getElementById("ampel").innerHTML = ampel;

}
