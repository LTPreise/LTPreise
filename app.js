function berechnen(){

    let beladen = Number(document.getElementById("beladen").value);
    let leer = Number(document.getElementById("leer").value);
    let extra = Number(document.getElementById("extra").value);
    let maut = Number(document.getElementById("maut").value);
    let kmPreis = Number(document.getElementById("kmPreis").value);

    let gesamt = beladen + leer + extra;

    let preis = (gesamt * kmPreis) + maut;

    document.getElementById("gesamtKm").innerHTML = gesamt + " km";

    document.getElementById("preis").innerHTML =
        preis.toFixed(2).replace(".",",") + " €";
}
