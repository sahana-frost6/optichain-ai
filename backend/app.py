from flask import Flask, jsonify
from flask_cors import CORS
from model import predict_demand
from optimizer import find_best_warehouse
import os

print("Running OptiChain backend from correct file")

app = Flask(__name__)
# This allows your local HTML file to talk to this Python server
CORS(app)

# Simulated warehouses
warehouses = [
    {"id": "A", "location": (0, 0), "stock": 100},
    {"id": "B", "location": (10, 10), "stock": 50}
]

@app.route("/")
def home():
    return "OptiChain AI Backend is Running 🚀"

@app.route("/predict/<int:day>")
def predict(day):
    demand = predict_demand(day)
    return jsonify({"predicted_demand": int(demand)})

@app.route("/optimize/<int:day>")
def optimize(day):
    demand = predict_demand(day)
    customer = (5, 5)
    best = find_best_warehouse(warehouses, customer, demand)
    return jsonify({
        "best_warehouse": best,
        "demand": demand
    })

@app.route("/alert/<int:day>")
def alert(day):
    demand = predict_demand(day)
    if demand > 70:
        return jsonify({"alert": "⚠️ High demand expected! Reallocate stock."})
    else:
        return jsonify({"alert": "✅ Demand is stable"})

# FIXED: Ensure the server runs on the correct port for local and cloud
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
