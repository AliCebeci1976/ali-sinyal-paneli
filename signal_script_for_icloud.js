// Örnek sinyal simülasyonu
const signalBox = document.getElementById("signalBox");
const lastUpdate = document.getElementById("lastUpdate");
const signals = ["EURUSD AL", "USDJPY AL", "BEKLE"];

function getRandomSignal() {
    const signal = signals[Math.floor(Math.random() * signals.length)];
    const time = new Date().toLocaleTimeString();

    lastUpdate.innerText = time;

    if (signal === "EURUSD AL") {
        signalBox.className = "signal-box buy-eurusd";
        signalBox.innerText = "ALI: EUR/USD AL";
    } else if (signal === "USDJPY AL") {
        signalBox.className = "signal-box buy-usdjpy";
        signalBox.innerText = "ALI: USD/JPY AL";
    } else {
        signalBox.className = "signal-box wait";
        signalBox.innerText = "BEKLE";
    }
}

setInterval(getRandomSignal, 5000);
getRandomSignal();
