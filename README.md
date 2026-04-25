# 📦 OptiChain AI

## 🚀 Overview

OptiChain AI is a prototype of an AI-driven supply chain decision system.
It predicts product demand using machine learning, selects the optimal warehouse for delivery, and simulates real-time disruptions.

---

## 🎯 Problem Statement

Supply chains face major challenges such as:

* Unpredictable demand
* Inefficient warehouse allocation
* Lack of real-time decision-making

---

## 💡 Solution

OptiChain AI provides a unified system that:

* Forecasts future demand using historical data
* Optimizes warehouse selection based on distance and stock
* Generates alerts for demand spikes
* Simulates disruptions and recovery strategies

---

## 🧠 Key Features

### 📊 Demand Prediction

Uses Linear Regression trained on historical data to forecast future demand.

### 🚚 Route Optimization

Selects the best warehouse based on:

* Distance to customer
* Available stock

### 🚨 Smart Alerts

Detects high-demand situations and provides proactive warnings.

### ⚡ Crisis Simulation

Simulates real-world scenarios like:

* Demand spikes
* Warehouse failures
* Automatic rerouting

---

## 🏗️ Architecture

Frontend (HTML, CSS, JavaScript)
⬇
Backend API (Flask)
⬇
Machine Learning Model (Scikit-learn)
⬇
Dataset (CSV – historical demand)

---

## 📊 Tech Stack

* Python (Flask)
* Pandas
* Scikit-learn
* HTML, CSS, JavaScript
* Chart.js

---

## 📁 Project Structure

optichain-ai/
│
├── backend/
│   ├── app.py
│   ├── model.py
│   ├── optimizer.py
│   └── data.csv
│
└── frontend/
├── index.html
├── style.css
└── dashboard.js

---

## ⚙️ How to Run Locally

### 🔹 Backend

cd backend
pip install flask flask-cors pandas scikit-learn
python app.py

---

### 🔹 Frontend

cd frontend
python -m http.server 8000 --bind 127.0.0.1

---

### 🌐 Open in Browser

http://127.0.0.1:8000

---

## 🧪 API Endpoints

* / → Backend status
* /predict/<day> → Returns predicted demand
* /optimize/<day> → Returns best warehouse
* /alert/<day> → Returns alert message

---

## 🌍 Future Scope

* Integration with real-time IoT and ERP systems
* Advanced ML models (LSTM, ARIMA)
* Multi-product demand forecasting
* Live logistics tracking and analytics

---

## 🏆 Hackathon Note

This is a scalable prototype demonstrating how predictive analytics and optimization can be combined into a real-time decision-making system for supply chain management.

---

## 👩‍💻 Team

OptiChain AI Team
