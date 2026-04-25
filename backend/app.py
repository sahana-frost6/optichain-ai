from flask import Flask, jsonify
from flask_cors import CORS
from model import predict_demand
from optimizer import find_best_warehouse

print("Running OptiChain backend from correct file")

app = Flask(__name__)
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
    return jsonify({"predicted_demand": demand})

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

if __name__ == "__main__":
    import os

port = int(os.environ.get("PORT", 10000))
app.run(host="0.0.0.0", port=port)    