function getPrediction() {
    let el = document.getElementById("prediction");
    el.innerText = "⏳ Calculating...";

    fetch("http://127.0.0.1:5000/predict/8")
    .then(res => res.json())
    .then(data => {
        el.innerText = "Predicted Demand: " + data.predicted_demand;
    })
    .catch(() => {
        el.innerText = "❌ Error connecting to backend";
    });
}

function getOptimization() {
    let el = document.getElementById("optimize");
    el.innerText = "⏳ Processing...";

    fetch("http://127.0.0.1:5000/optimize/8")
    .then(res => res.json())
    .then(data => {
        el.innerText = "Best Warehouse: " + data.best_warehouse.id;
    })
    .catch(() => {
        el.innerText = "❌ Error";
    });
}

function getAlert() {
    let el = document.getElementById("alert");

    fetch("http://127.0.0.1:5000/alert/8")
    .then(res => res.json())
    .then(data => {
        el.innerText = data.alert;
    })
    .catch(() => {
        el.innerText = "❌ Error";
    });
}

function simulate() {
    let el = document.getElementById("simulation");

    el.innerText = "🚨 Demand spike detected...";
    setTimeout(() => {
        el.innerText += "\n🏭 Warehouse failure...";
    }, 1000);
    setTimeout(() => {
        el.innerText += "\n⚡ Rerouting supply...";
    }, 2000);
    setTimeout(() => {
        el.innerText += "\n✅ System stabilized";
    }, 3000);
}