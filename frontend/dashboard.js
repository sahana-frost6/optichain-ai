const API_URL = "https://optichain-backend-5fl7.onrender.com"; 

// --- 1. CHART INITIALIZATION ---
const ctx = document.getElementById('demandChart').getContext('2d');
const demandChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Predicted Demand',
            data: [65, 59, 80, 81, 56, 55, 40], 
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { labels: { color: 'white' } }
        },
        scales: {
            y: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
                ticks: { color: '#94a3b8' },
                grid: { display: false }
            }
        }
    }
});

// --- 2. UPDATED FUNCTIONS ---

function getPrediction() {
    let el = document.getElementById("prediction");
    let productId = document.getElementById("productInput").value || "8"; 
    
    el.innerText = "⏳ Calculating...";

    // FIXED URL: Using the API_URL variable correctly here
    fetch(`${API_URL}/predict/${productId}`)
    .then(res => res.json())
    .then(data => {
        el.innerText = "Predicted Demand: " + data.predicted_demand;
        
        // Update Chart
        demandChart.data.datasets[0].data.push(data.predicted_demand);
        if(demandChart.data.datasets[0].data.length > 10) demandChart.data.datasets[0].data.shift();
        demandChart.update();
    })
    .catch(() => { el.innerText = "❌ Connection Error"; });
}

function getOptimization() {
    let el = document.getElementById("optimize");
    let productId = document.getElementById("productInput").value || "8";
    el.innerText = "⏳ Processing...";

    fetch(`${API_URL}/optimize/${productId}`)
    .then(res => res.json())
    .then(data => {
        el.innerText = "Best Warehouse: " + data.best_warehouse.id;
    })
    .catch(() => { el.innerText = "❌ Error"; });
}

function getAlert() {
    let el = document.getElementById("alert");
    let productId = document.getElementById("productInput").value || "8";

    fetch(`${API_URL}/alert/${productId}`)
    .then(res => res.json())
    .then(data => {
        el.innerText = data.alert;
    })
    .catch(() => { el.innerText = "❌ Error"; });
}

function simulate() {
    let el = document.getElementById("simulation");
    el.innerText = "🚨 Demand spike detected...";
    setTimeout(() => { el.innerText += "\n🏭 Warehouse failure..."; }, 1000);
    setTimeout(() => { el.innerText += "\n⚡ Rerouting supply..."; }, 2000);
    setTimeout(() => { el.innerText += "\n✅ System stabilized"; }, 3000);
}

// Live metrics simulation
setInterval(() => {
    let countEl = document.getElementById("shipmentCount");
    if(countEl) {
        let currentCount = parseInt(countEl.innerText.replace(',', ''));
        countEl.innerText = (currentCount + Math.floor(Math.random() * 5)).toLocaleString();
    }
}, 3000);
