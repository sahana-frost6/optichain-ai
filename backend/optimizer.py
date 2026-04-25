import math

def distance(p1, p2):
    return math.sqrt((p1[0]-p2[0])**2 + (p1[1]-p2[1])**2)

def find_best_warehouse(warehouses, customer, demand):
    best = None
    best_score = float('inf')

    for w in warehouses:
        dist = distance(w['location'], customer)

        penalty = 0 if w['stock'] >= demand else 100
        score = dist + penalty

        if score < best_score:
            best_score = score
            best = w

    return best